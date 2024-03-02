const { hash, compare } = require("bcryptjs")
const AppError = require('../utils/AppError')
const sqliteConnection = require("../database/sqlite")
const UserRepository = require("../repositories/UserRepository")
const UserCreateService = require("../services/UserCreateService")

class UsersController {
    async create(request, response){
        // Antes de dividir em repository
        // const { name, email, password} = request.body

        // const database = await sqliteConnection()
        // const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        // if (checkUserExists) {
        //     throw new AppError("Esse e-mail já está em uso.")
        // }

        // const hashedPassword = await hash(password, 8)

        // await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword])

        // return response.status(201).json()

        //Inversão de dependência
        const { name, email, password} = request.body

        const userRepository = new UserRepository()

        const userCreateService = new UserCreateService(userRepository) //Istancia com o repository 

        await userCreateService.execute({ name, email, password})

        return response.status(201).json()

        
    }

    /** Padrão de funções do controller
     * index - GET para listar vários registros. (ex: todos usuários cadastrados)
     * show - GET para exibir um registro específico
     * create - POST para criar um registro
     * update - PUT para atualizar um registro
     * delete - DELETE para remover um registro
     */
    /*
    // response.send(`Usuário: ${name} - Email: ${email} e a senha ${password}`);
        //pode ser enviado tbm um json

        if(!name) {
            throw new AppError('Nome é obrigatório')
        }
        response.status(201).json({ name, email, password})
    */
    
    async update(request, response){
        const { name, email, password, old_password } = request.body
        // const { id } = request.params
        console.log(name, email, password, old_password)
        //Após o uso de middlewares trocar o id pelo user_id
        const user_id = request.user.id

        const database = await sqliteConnection()
        //Verificações
        const user = await database.get("SELECT * FROM users WHERE id = (?)", [user_id])

        if(!user) {
            throw new AppError("Usuário não encontrado")
        }

        const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id){
            throw new AppError("Este e-mail já está em uso")
        }

        user.name = name ?? user.name
        user.email = email ?? user.email

        if( password && !old_password){
            throw new AppError("Voce precisa informar a senha antiga para definir a nova senha")
        }

        if (password && old_password) {
            const checkOldPassword = await compare(old_password, user.password)

            if (!checkOldPassword) {
                throw new AppError("A senha antiga não confere.")
            }

            user.password = await hash(password, 8)
        }

        await database.run(`
            UPDATE users SET
            name = ?,
            email = ?,
            password = ?,
            updated_at = DATETIME('now')
            WHERE id =?`,
            [user.name, user.email, user.password, user_id]
        )

        return response.status(200).json()
    }
}

module.exports = UsersController
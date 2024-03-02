const UserCreateService = require("./UserCreateService")
const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory")
const AppError = require("../utils/AppError")

//describe() é um grupo de teste
describe("UserCreateService", () => {
    let userRepositoryInMemory = null
    let userCreateService =  null
    
    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory()
        userCreateService =  new UserCreateService(userRepositoryInMemory)
    })
    
    it("user should be create", async () => {
        const user = {
            name: "User Teste",
            email: "user@teste.com",
            password: "123"
        }
    
        // const userRepositoryInMemory = new UserRepositoryInMemory()
        // const userCreateService =  new UserCreateService(userRepositoryInMemory)
        const userCreated = await userCreateService.execute(user)
    
        expect(userCreated).toHaveProperty("id")
    })

    it("user should not be created with existing email", async () => {
        const user1 = {
            name: "User 1",
            email: "user@teste.com",
            password: "123"
        }
        const user2 = {
            name: "User 2",
            email: "user@teste.com",
            password: "123"
        }

        // const userRepository = new UserRepositoryInMemory()
        // const userCreateService = new UserCreateService(userRepository)

        await userCreateService.execute(user1)
        await expect(userCreateService.execute(user2)).rejects.toEqual(new AppError("Esse e-mail já está em uso."))
    })
})





//Exemplo de teste
    // it("result of them sum of 2 + 2 must be 4", () => {
    //     const a = 2
    //     const b = 2
    //     const result = a + b

    //     expect(result).toBe(4) //Expectativa do resultado do teste
    // })
    //it("Descrição do teste", função que contem o teste)
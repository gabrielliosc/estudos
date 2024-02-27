const { verify } = require("jsonwebtoken")
const AppError = require("../utils/AppError")
const authConfig = require("../configs/auth")

function ensureAuthenticated(request, response, next){

    const authHeader = request.headers.authorization


    if(!authHeader){
        throw new AppError("JWT Token não informado", 401)
    }

    const [, token] = authHeader.split(" ") //"Bearer xxxxxxx" split pelo espaço

    try{
        const { sub: user_id } = verify(token, authConfig.jwt.secret) //{sub: } representa a destruturação da variavel sub retornada do verify {: user_id} ALIAS criado para inserir o valor de sub

        request.user = {
            id: Number(user_id) // Passa para number pq esta armazenado como string
        }

        return next()
    } catch {
        throw new AppError("JWT Token inválido", 401)
    }
}

module.exports = ensureAuthenticated
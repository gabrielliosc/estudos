require('express-async-errors')

const migrationsRun = require('./database/sqlite/migrations')

const AppError = require('./utils/AppError')

const express = require('express')

const routes = require('./routes')

const app = express();
app.use(express.json()) //Para informar que será enviado no body da requsição um JSON
app.use(routes)

migrationsRun()

app.use(( error, request, response, next ) => {
    if( error instanceof AppError) { //Error do cliente
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }
    console.log(error)
    
    return response.status(500).json({ //Erro do servidor
        status: "error",
        message: error.message
    })
})
const PORT = 3333; //Número da porta
app.listen(PORT, () => console.log(`Server is runnig on ${PORT}`)); //A aplicação fica "observando" a porta para rodar a API



/* Exemplo

app.get("/message/:id/:user", (request, response) => { 

    const {id, user} = request.params //Pode desestruturar os parametros para nao precisar escrever request.params. antes
    response.send(`Hello, world! ${id}, ${user}`)
}) 

*/

/*

-> Metodo GET  (Rota, função que vai executar ao fazer a requisição na rota)

-> :id é usado para definir que na rota dps de message terá um parametro id (Usa-se o : para identificar) que será passado como request, pode usar mais de um parametro na rota. Os parametros são utilizados para passar informações mais simples, por exemplo como id de um produto

-> No query os parametros não são obrigatórios, ou seja, é possivel acessar a rota sem eles, já nos params precisa passar os parametros definidos

*/
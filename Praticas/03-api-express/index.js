// Importar o express
const express = require('express')

// Crio uma instância (express) da minha aplicação
const app = express()

// Guardar o número da porta que vai ser alocada
const porta = 3000

// Middlewares (Intermediários)
// Método e rota
// req -> Dados da requisição
// res -> Manipulador da resposta
// next -> chamador do próximo middleware
app.use((req, res, next) => {
    console.log("Time: ", new Date().toLocaleString())
    console.log("Método ", req.method)
    console.log("Rota: ", req.url)
    next()
})


app.get("/test", (req, res, next) => {
    res.send("TESTE ATUALIZADO!!!")
} )

app.get('/pessoas', (req, res, next)=> {
    const pessoas = [
    {
        id:1,
        nome: "Joao",
        idade: "20"
    },
    {
        id:2,
        nome: "Gabriel",
        idade: "22"
    }]
})


// Executa a aplicação escolhendo a porta
app.listen(porta, () => {
    // Imprimo uma mensagem pra confirmar que a aplicação está funcionando (rodando na porta escolhida)
    console.log("Aplicação rodando em http://localhost:3000")
})
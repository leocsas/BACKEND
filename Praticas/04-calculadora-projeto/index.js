// Importar o express
const express = require("express")

// Criar instância do express
const app = express()

// Middleware (Intermediário)
// Intermediário de log
app.use((req, res, next) => {
    console.log("------#------")
    console.log("Tempo: ", new Date().toLocaleString())
    console.log("Método ", req.method)
    console.log("Rota: ", req.url)
    next()
})

app.get('/nome', (req, res, next) => {
    const primeiroNome = req.query.primeiroNome
    const sobrenome = req.query.sobrenome

    res.send("Olá " + primeiroNome + " " + sobrenome + "!")
})

// Importando o router calculadora de notas
const calculadora = require('./routes/calculadora')

// Toda requisição que chegar na rota /calculadora vai para o router
app.use('/calculadora', calculadora)


// Executar a aplicação
app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
})
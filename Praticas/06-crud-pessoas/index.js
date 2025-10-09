const express = require('express')
const app = express()


// Configurar e mapear os intermediários
const cors = require('cors')
app.use(cors()) // Habilitar o CORS do browser
app.use(express.json()) // Receber JSON no body da requisição

// Mapear os meus routes
const pessoasRouter = require('./routes/pessoas')
app.use(pessoasRouter)


// Executar a aplicação
app.listen(3000, () => {
    console.log("Aplicação rodando!")
})
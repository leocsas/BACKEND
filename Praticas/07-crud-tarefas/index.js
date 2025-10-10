const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const app = express()
app.use(express.json())

// Conectar ao banco Mongo
mongoose.connect('mongodb+srv://leocsas:x858u0qv8ceLyO6R@cluster0.qvdihfb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log('Conectado ao MongoDB')
})
.catch(err => {
    console.log('Erro ao conectar no banco MongoDB.', err)
})

app.listen(3000, () => {
    console.log('Aplicação rodando em http://localhost:3000')
})
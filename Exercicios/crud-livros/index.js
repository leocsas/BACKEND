const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const app = express()
app.use(express.json())

// Conectando ao banco Mongo
const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_NAME = process.env.DB_NAME

const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(url)
    .then(() => {
        console.log('Conectado ao MongoDB')
    })
    .catch(err => {
        console.log('Erro ao conectar ao banco MongoDB: ', err)
    })

    const LivroModel = mongoose.model('Livro', new mongoose.Schema({
        titulo: { type: String, required: true },
        autor: { type: String, required: true },
        editora: String,
        ano: Number,
        preco: Number
      }))
      

// Criar
app.post('/livros', async (req, res) => {
    try {
      const livro = await LivroModel.create(req.body)
      res.status(201).json(livro)
    } catch (err) {
      res.status(400).json({ erro: 'Erro ao criar livro', detalhes: err.message })
    }
  })
  
  // Listar todos
  app.get('/livros', async (req, res) => {
    const livros = await LivroModel.find()
    res.json(livros)
  })
  
  // Buscar por ID
  app.get('/livros/:id', async (req, res) => {
    const livro = await LivroModel.findById(req.params.id)
    if (!livro) return res.status(404).json({ erro: 'Livro não encontrado' })
    res.json(livro)
  })
  
  // Atualizar
  app.put('/livros/:id', async (req, res) => {
    const livroAtualizado = await LivroModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!livroAtualizado) return res.status(404).json({ erro: 'Livro não encontrado' })
    res.json(livroAtualizado)
  })
  
  // Deletar
  app.delete('/livros/:id', async (req, res) => {
    const livroRemovido = await LivroModel.findByIdAndDelete(req.params.id)
    if (!livroRemovido) return res.status(404).json({ erro: 'Livro não encontrado' })
    res.json({ mensagem: 'Livro removido com sucesso' })
  })

// Start
app.listen(3000, () => {
    console.log('Aplicação rodando em http://localhost:3000')
})
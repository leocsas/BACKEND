const express = require('express')
const router = express.Router()
const Livro = require('../models/Livro')

const { validarID } = require('../validators/IDValidator')
const { validarNovoLivro, validarAtualizacaoLivro } = require('../validators/LivroValidator')

// CREATE
router.post('/livros', validarNovoLivro, async (req, res) => {
  const livro = await Livro.create(req.body)
  res.status(201).json(livro)
})

// READ - todos
router.get('/livros', async (req, res) => {
  const livros = await Livro.find()
  res.json(livros)
})

// READ - por ID
router.get('/livros/:id', validarID, async (req, res) => {
  const livro = await Livro.findById(req.params.id)
  if (!livro) return res.status(404).json({ erro: "Livro não encontrado" })
  res.json(livro)
})

// UPDATE
router.put('/livros/:id', validarID, validarAtualizacaoLivro, async (req, res) => {
  const livroAtualizado = await Livro.findByIdAndUpdate(req.params.id, req.body, { new: true })
  if (!livroAtualizado) return res.status(404).json({ erro: "Livro não encontrado" })
  res.json(livroAtualizado)
})

// DELETE
router.delete('/livros/:id', validarID, async (req, res) => {
  const livroRemovido = await Livro.findByIdAndDelete(req.params.id)
  if (!livroRemovido) return res.status(404).json({ erro: "Livro não encontrado" })
  res.status(204).send()
})

module.exports = router
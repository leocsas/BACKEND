const express = require('express');
const router = express.Router();
const ProjetoModel = require('../models/ProjetoModel');
const { validateCreate, validateUpdate } = require('../validators/ProjetoValidator');
const { validateId } = require('../validators/IDValidator');

// POST /projetos
router.post('/', validateCreate, async (req, res) => {
  const projeto = await ProjetoModel.create(req.body);
  res.status(201).json(projeto);
});

// GET /projetos
router.get('/', async (_, res) => res.json(await ProjetoModel.find()));

// GET /projetos/:id
router.get('/:id', validateId, async (req, res) => {
  const projeto = await ProjetoModel.findById(req.params.id);
  if (!projeto) return res.status(404).json({ message: 'Projeto não encontrado' });
  res.json(projeto);
});

// PUT /projetos/:id
router.put('/:id', validateId, validateUpdate, async (req, res) => {
  const projeto = await ProjetoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!projeto) return res.status(404).json({ message: 'Projeto não encontrado' });
  res.json(projeto);
});

// DELETE /projetos/:id
router.delete('/:id', validateId, async (req, res) => {
  const projeto = await ProjetoModel.findByIdAndDelete(req.params.id);
  if (!projeto) return res.status(404).json({ message: 'Projeto não encontrado' });
  res.json({ message: 'Projeto removido com sucesso' });
});

module.exports = router;
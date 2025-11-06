const express = require('express');
const router = express.Router();
const DepartamentoModel = require('../models/DepartamentoModel');
const { validateCreate, validateUpdate } = require('../validators/DepartamentoValidator');
const { validateId } = require('../validators/IDValidator');

// POST /departamentos
router.post('/', validateCreate, async (req, res) => {
  try {
    const dep = await DepartamentoModel.create(req.body);
    res.status(201).json(dep);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao criar departamento' });
  }
});

// GET /departamentos
router.get('/', async (_, res) => {
  const deps = await DepartamentoModel.find();
  res.json(deps);
});

// GET /departamentos/:id
router.get('/:id', validateId, async (req, res) => {
  const dep = await DepartamentoModel.findById(req.params.id);
  if (!dep) return res.status(404).json({ message: 'Departamento não encontrado' });
  res.json(dep);
});

// PUT /departamentos/:id
router.put('/:id', validateId, validateUpdate, async (req, res) => {
  const dep = await DepartamentoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!dep) return res.status(404).json({ message: 'Departamento não encontrado' });
  res.json(dep);
});

// DELETE /departamentos/:id
router.delete('/:id', validateId, async (req, res) => {
  const dep = await DepartamentoModel.findByIdAndDelete(req.params.id);
  if (!dep) return res.status(404).json({ message: 'Departamento não encontrado' });
  res.json({ message: 'Departamento removido com sucesso' });
});

module.exports = router;
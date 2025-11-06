const express = require('express');
const router = express.Router();
const CargoModel = require('../models/CargoModel');
const { validateCreate, validateUpdate } = require('../validators/CargoValidator');
const { validateId } = require('../validators/IDValidator');

// POST /cargos
router.post('/', validateCreate, async (req, res) => {
  const cargo = await CargoModel.create(req.body);
  res.status(201).json(cargo);
});

// GET /cargos
router.get('/', async (_, res) => res.json(await CargoModel.find()));

// GET /cargos/:id
router.get('/:id', validateId, async (req, res) => {
  const cargo = await CargoModel.findById(req.params.id);
  if (!cargo) return res.status(404).json({ message: 'Cargo não encontrado' });
  res.json(cargo);
});

// PUT /cargos/:id
router.put('/:id', validateId, validateUpdate, async (req, res) => {
  const cargo = await CargoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!cargo) return res.status(404).json({ message: 'Cargo não encontrado' });
  res.json(cargo);
});

// DELETE /cargos/:id
router.delete('/:id', validateId, async (req, res) => {
  const cargo = await CargoModel.findByIdAndDelete(req.params.id);
  if (!cargo) return res.status(404).json({ message: 'Cargo não encontrado' });
  res.json({ message: 'Cargo removido com sucesso' });
});

module.exports = router;
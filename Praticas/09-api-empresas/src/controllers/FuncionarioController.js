const express = require('express');
const router = express.Router();
const FuncionarioModel = require('../models/FuncionarioModel');
const CargoModel = require('../models/CargoModel');
const DepartamentoModel = require('../models/DepartamentoModel');
const { validateCreate, validateUpdate } = require('../validators/FuncionarioValidator');
const { validateId } = require('../validators/IDValidator');

// POST /funcionarios
router.post('/', validateCreate, async (req, res) => {
  const { cargo, departamento } = req.body;
  if (!(await CargoModel.findById(cargo))) return res.status(400).json({ message: 'Cargo inválido' });
  if (!(await DepartamentoModel.findById(departamento))) return res.status(400).json({ message: 'Departamento inválido' });
  const func = await FuncionarioModel.create(req.body);
  res.status(201).json(func);
});

// GET /funcionarios
router.get('/', async (_, res) => {
  const funcs = await FuncionarioModel.find().populate(['cargo', 'departamento']);
  res.json(funcs);
});

// GET /funcionarios/:id
router.get('/:id', validateId, async (req, res) => {
  const func = await FuncionarioModel.findById(req.params.id).populate(['cargo', 'departamento']);
  if (!func) return res.status(404).json({ message: 'Funcionário não encontrado' });
  res.json(func);
});

// PUT /funcionarios/:id
router.put('/:id', validateId, validateUpdate, async (req, res) => {
  const func = await FuncionarioModel.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate(['cargo', 'departamento']);
  if (!func) return res.status(404).json({ message: 'Funcionário não encontrado' });
  res.json(func);
});

// DELETE /funcionarios/:id
router.delete('/:id', validateId, async (req, res) => {
  const func = await FuncionarioModel.findByIdAndDelete(req.params.id);
  if (!func) return res.status(404).json({ message: 'Funcionário não encontrado' });
  res.json({ message: 'Funcionário removido com sucesso' });
});

module.exports = router;
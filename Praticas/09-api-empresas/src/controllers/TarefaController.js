const express = require('express');
const router = express.Router();
const TarefaModel = require('../models/TarefaModel');
const FuncionarioModel = require('../models/FuncionarioModel');
const ProjetoModel = require('../models/ProjetoModel');
const { validateCreate, validateUpdate } = require('../validators/TarefaValidator');
const { validateId } = require('../validators/IDValidator');

// POST /tarefas
router.post('/', validateCreate, async (req, res) => {
  const { responsavel, projeto } = req.body;
  if (!(await FuncionarioModel.findById(responsavel))) return res.status(400).json({ message: 'Funcionário inválido' });
  if (!(await ProjetoModel.findById(projeto))) return res.status(400).json({ message: 'Projeto inválido' });
  const tarefa = await TarefaModel.create(req.body);
  res.status(201).json(tarefa);
});

// GET /tarefas
router.get('/', async (_, res) => {
  const tarefas = await TarefaModel.find().populate(['responsavel', 'projeto']);
  res.json(tarefas);
});

// GET /tarefas/:id
router.get('/:id', validateId, async (req, res) => {
  const tarefa = await TarefaModel.findById(req.params.id).populate(['responsavel', 'projeto']);
  if (!tarefa) return res.status(404).json({ message: 'Tarefa não encontrada' });
  res.json(tarefa);
});

// PUT /tarefas/:id
router.put('/:id', validateId, validateUpdate, async (req, res) => {
  const tarefa = await TarefaModel.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate(['responsavel', 'projeto']);
  if (!tarefa) return res.status(404).json({ message: 'Tarefa não encontrada' });
  res.json(tarefa);
});

// DELETE /tarefas/:id
router.delete('/:id', validateId, async (req, res) => {
  const tarefa = await TarefaModel.findByIdAndDelete(req.params.id);
  if (!tarefa) return res.status(404).json({ message: 'Tarefa não encontrada' });
  res.json({ message: 'Tarefa removida com sucesso' });
});

module.exports = router;
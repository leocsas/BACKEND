const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());

const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
const PORT = process.env.PORT || 3000;

mongoose
  .connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`)
  .then(() => console.log('✅ Conectado ao MongoDB Atlas'))
  .catch((err) => console.error('❌ Erro ao conectar no MongoDB:', err));

// Importar controllers
const departamentoRouter = require('./controllers/DepartamentoController');
const cargoRouter = require('./controllers/CargoController');
const funcionarioRouter = require('./controllers/FuncionarioController');
const projetoRouter = require('./controllers/ProjetoController');
const tarefaRouter = require('./controllers/TarefaController');

// Rotas
app.use('/departamentos', departamentoRouter);
app.use('/cargos', cargoRouter);
app.use('/funcionarios', funcionarioRouter);
app.use('/projetos', projetoRouter);
app.use('/tarefas', tarefaRouter);

app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
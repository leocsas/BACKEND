const mongoose = require('mongoose');

const FuncionarioSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true, trim: true },
    cpf: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    telefone: { type: String, required: true, trim: true },
    data_contratacao: { type: Date, required: true },
    data_nascimento: { type: Date, required: true },
    genero: { type: String, required: true },
    endereco: {
      cep: String,
      logradouro: String,
      numero: String,
      complemento: String,
      bairro: String,
      cidade: String,
      uf: String
    },
    cargo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Cargos',
      required: true
    },
    departamento: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Departamentos',
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Funcionarios', FuncionarioSchema);
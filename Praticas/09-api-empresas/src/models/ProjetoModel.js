const mongoose = require('mongoose');

const ProjetoSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true, trim: true },
    descricao: { type: String, required: true, trim: true },
    data_inicio: { type: Date, required: true },
    data_fim: { type: Date, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Projetos', ProjetoSchema);
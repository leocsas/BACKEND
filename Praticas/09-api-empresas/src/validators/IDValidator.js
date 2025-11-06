const mongoose = require('mongoose');

// Middleware genérico para validar IDs do MongoDB nas rotas com :id
const validateId = (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'ID inválido' });
  }

  next();
};

module.exports = { validateId };
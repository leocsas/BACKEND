const yup = require('yup');
const mongoose = require('mongoose');
const isValid = (id) => mongoose.Types.ObjectId.isValid(id);

const createSchema = yup.object().shape({
  titulo: yup.string().required(),
  descricao: yup.string().required(),
  data_inicio: yup.date().required(),
  data_fim: yup.date().required().min(yup.ref('data_inicio'), 'data_fim deve ser posterior à data_inicio'),
  responsavel: yup.string().required().test('is-valid', 'ID de funcionário inválido', isValid),
  projeto: yup.string().required().test('is-valid', 'ID de projeto inválido', isValid)
});

const updateSchema = createSchema.clone();

const validateCreate = async (req, res, next) => {
  try {
    await createSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ errors: err.errors });
  }
};

const validateUpdate = async (req, res, next) => {
  try {
    await updateSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ errors: err.errors });
  }
};

module.exports = { validateCreate, validateUpdate };

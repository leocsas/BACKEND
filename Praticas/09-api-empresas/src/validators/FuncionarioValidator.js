const yup = require('yup');
const mongoose = require('mongoose');
const isValid = (id) => mongoose.Types.ObjectId.isValid(id);

const createSchema = yup.object().shape({
  nome: yup.string().required(),
  cpf: yup.string().required(),
  email: yup.string().email().required(),
  telefone: yup.string().required(),
  data_contratacao: yup.date().required(),
  data_nascimento: yup.date().required(),
  genero: yup.string().required(),
  endereco: yup.object(),
  cargo: yup.string().required().test('is-valid', 'ID de cargo inválido', isValid),
  departamento: yup.string().required().test('is-valid', 'ID de departamento inválido', isValid)
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
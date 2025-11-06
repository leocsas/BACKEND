const yup = require('yup');

const createSchema = yup.object().shape({
  nome: yup.string().required('O campo nome é obrigatório'),
  descricao: yup.string().required('O campo descricao é obrigatório')
});

const updateSchema = yup.object().shape({
  nome: yup.string(),
  descricao: yup.string()
});

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
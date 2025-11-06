const yup = require('yup');

const createSchema = yup.object().shape({
  nome: yup.string().required(),
  descricao: yup.string().required(),
  salario: yup.number().required().min(1518, 'Salário mínimo R$ 1.518,00')
});

const updateSchema = yup.object().shape({
  nome: yup.string(),
  descricao: yup.string(),
  salario: yup.number().min(1518, 'Salário mínimo R$ 1.518,00')
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
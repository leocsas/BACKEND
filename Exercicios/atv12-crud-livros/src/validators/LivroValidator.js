const yup = require('yup')

// Schema para novo livro
const schemaNovoLivro = yup.object().shape({
  titulo: yup.string().required("O campo título é obrigatório"),
  autor: yup.string().required("O campo autor é obrigatório"),
  editora: yup.string().required("O campo editora é obrigatório"),
  ano: yup.number().typeError("O campo ano deve ser numérico").required("O campo ano é obrigatório"),
  preco: yup.number().typeError("O campo preço deve ser numérico").positive("O preço deve ser positivo").required("O campo preço é obrigatório"),
})

// Schema para atualização
const schemaAtualizarLivro = yup.object().shape({
  titulo: yup.string(),
  autor: yup.string(),
  editora: yup.string(),
  ano: yup.number().typeError("O campo ano deve ser numérico"),
  preco: yup.number().typeError("O campo preço deve ser numérico").positive("O preço deve ser positivo"),
})

// Middlewares de validação
async function validarNovoLivro(req, res, next) {
  try {
    await schemaNovoLivro.validate(req.body, { abortEarly: false })
    next()
  } catch (error) {
    return res.status(400).json({ erros: error.errors })
  }
}

async function validarAtualizacaoLivro(req, res, next) {
  try {
    await schemaAtualizarLivro.validate(req.body, { abortEarly: false })
    next()
  } catch (error) {
    return res.status(400).json({ erros: error.errors })
  }
}

module.exports = {
  validarNovoLivro,
  validarAtualizacaoLivro
}
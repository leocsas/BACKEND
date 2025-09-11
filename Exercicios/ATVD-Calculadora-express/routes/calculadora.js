const express = require('express');
const router = express.Router();

// GET /calculadora/somar?numA=10&numB=5
router.get('/somar', (req, res) => {
  const { numA, numB } = req.query;
  const resultado = Number(numA) + Number(numB);
  res.json({ resultado });
});

router.get('/subtrair', (req, res) => {
  const { numA, numB } = req.query;
  const resultado = Number(numA) - Number(numB);
  res.json({ resultado });
});

router.get('/multiplicar', (req, res) => {
  const { numA, numB } = req.query;
  const resultado = Number(numA) * Number(numB);
  res.json({ resultado });
});

router.get('/dividir', (req, res) => {
  const { numA, numB } = req.query;
  if (Number(numB) === 0) {
    return res.status(400).json({ erro: 'Divisão por zero não é permitida' });
  }
  const resultado = Number(numA) / Number(numB);
  res.json({ resultado });
});

router.get('/aoQuadrado', (req, res) => {
  const { num } = req.query;
  const resultado = Math.pow(Number(num), 2);
  res.json({ resultado });
});

router.get('/raizQuadrada', (req, res) => {
  const { num } = req.query;
  const numero = Number(num);
  if (numero < 0) {
    return res.status(400).json({ erro: 'Não é possível calcular a raiz quadrada de número negativo' });
  }
  const resultado = Math.sqrt(numero);
  res.json({ resultado });
});

module.exports = router;
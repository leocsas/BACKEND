// Importar o express
const express = require('express')

// Criar router (Roteador)
const router = express.Router()

//Mapeamento das rotas e implemento a lógica
router.get('/notaA1', (req, res, next) => {
    const exercicios = parseFloat(req.query.exercicios)
    const trabalho = parseFloat(req.query.trabalho)
    const prova = parseFloat(req.query.prova)

    // Validar se as notas são números
    if(isNaN(exercicios) || isNaN(trabalho) || isNaN(prova)) {
        return res.status(400).json({erro: "Notas inválidas"})
    }

    // Validar se as notas estão nos intervalos corretos
    if(exercicios < 0 || exercicios > 0 || trabalho < 0 || trabalho > 3 || prova < 0 || prova > 6) {
        return res.status(400).json({erro: "Notas fora do intervalo"})
    }

    const notaA1 = exercicios + trabalho + prova

    res.json({notaA1})
})

// Calcular notaA2


// Calcula média final (A1 40% E A2 60%)



module.exports = router
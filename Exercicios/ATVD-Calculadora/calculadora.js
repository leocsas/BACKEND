function soma (ValorA, ValorB){
    return (ValorA) + (ValorB)
}

function sub (ValorA, ValorB){
    return (ValorA) - (ValorB)
}

function mult (ValorA, ValorB){
    return (ValorA) * (ValorB)
}

function divisao (ValorA, ValorB){
    return (ValorA) / (ValorB)
}

function quadradoA (ValorA){
    return (ValorA) * (ValorA)
}
function quadradoB (ValorB){
    return (ValorB) * (ValorB)
}

function raizA (ValorA){
    return Math.sqrt(ValorA)
}

function raizB (ValorB){
    return Math.sqrt(ValorB)
}

module.exports = {
    soma,
    sub,
    mult,
    divisao,
    quadradoA,
    quadradoB,
    raizA,
    raizB    
}
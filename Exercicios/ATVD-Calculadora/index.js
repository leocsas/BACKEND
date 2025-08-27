let prompt = require('prompt-sync')()

let nome = prompt("Qual o seu nome? ")

let ValorA = parseFloat(prompt("Olá, " + nome + ". Insira o valor de A: "))
let ValorB = parseFloat(prompt("Olá, " + nome + ". Insira o valor de B: "))


let {soma, sub, mult, divisao, quadradoA, quadradoB, raizA, raizB} = require('./calculadora')

console.log(ValorA, '+', ValorB, "=", soma(ValorA, ValorB))
console.log(ValorA, '-', ValorB, "=", sub(ValorA, ValorB))
console.log(ValorA, 'x', ValorB, "=", mult(ValorA, ValorB))
console.log(ValorA, '/', ValorB, "=", divisao(ValorA, ValorB))
console.log(ValorA, " ao quadrado é: ", quadradoA(ValorA))
console.log(ValorB, " ao quadrado é: ", quadradoB(ValorB))
console.log("Raiz quadrada de ", ValorA, "é: ", raizA(ValorA))
console.log("Raiz quadrada de ", ValorB, "é: ", raizB(ValorB))
// Importando a lib prompt-sync

// Usar a lib do prompt-sync
let prompt = require('prompt-sync')()
// Dois parentêses para executar

let nome = prompt("Qual o seu nome? ")

console.log("Olá " + nome)

// Importar o modulo CalculadoraNota
let {calcularNotaA1, calcularNotaA2, calcularNotaFinal} = require('./CalculadoraNota')

// Perguntar pro usuário a nota de exercícios, trabalho e prova

// NOTA A1
let exerciciosA1 = parseFloat(prompt("Qual a sua nota de exercícios nota A1? "))
let trabalhoA1 = parseFloat(prompt("Qual a sua nota de trabalho nota A1? "))
let provaA1 = parseFloat(prompt("Qual a sua nota de prova nota A1? "))
let notaA1= calcularNotaA1(exerciciosA1, trabalhoA1, provaA1)

console.log("## CALCULO NOTA A1")
console.log("Nota exercícios A1: ", exerciciosA1)
console.log("Nota trabalho A1: ", trabalhoA1)
console.log("Nota prova A1: ", provaA1)
console.log("Nota A1 calculada: ", notaA1)

// NOTA A2
let exerciciosA2 = parseFloat(prompt("Qual a sua nota de exercícios nota A2? "))
let trabalhoA2 = parseFloat(prompt("Qual a sua nota de trabalho nota A2? "))
let provaA2 = parseFloat(prompt("Qual a sua nota de prova nota A2? "))
let notaA2= calcularNotaA2(exerciciosA2, trabalhoA2, provaA2)

console.log("## CALCULO NOTA A2")
console.log("Nota exercícios A2: ", exerciciosA2)
console.log("Nota trabalho A2: ", trabalhoA2)
console.log("Nota prova A2: ", provaA2)
console.log("Nota A2 calculada: ", notaA2)

let notaFinal = calcularNotaFinal(notaA1, notaA2)

console.log("## CALCULO NOTA FINAL ##")
console.log("Nota final: ", notaFinal)

if (notaFinal >= 5){
    console.log("Parabéns " + nome + ", você foi APROVADO")
}
else {
    console.log(nome + ", estude mais, infelizmente REPROVADO!")
}
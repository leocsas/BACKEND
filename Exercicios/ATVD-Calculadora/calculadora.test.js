let calculadora = require('./calculadora')

let {describe, expect, test} = require('@jest/globals')

describe ('Testando modulo Calculadora', () => {
    test('ValorA, ValorB = 3', () => {
        expect(calculadora.soma(1, 2)).toBe(3);
    })
})
// Importa a biblioteca de assert para realizar afirmações nos testes
var assert = require("assert");//nesse caso usei o mocha.js

// Importa o módulo 'app' que contém as funções a serem testadas
const app = require("./app");

// Descreve a suíte de testes unitários
describe("Testes Unitários:", () => {

    // Descreve os testes para a função 'isNotNumber'
    describe("#isNotNumber()", () => {
        it("Deve retornar 'false' quando o parâmetro FOR um número", () => {
            assert.equal(app.isNotNumber(22), false);
        });
        it("Deve retornar 'true' quando o parâmetro NÃO FOR um número", () => {
            assert.equal(app.isNotNumber(null), true);
        });
    });

    // Descreve os testes para a função 'isNegativeNumber'
    describe("#isNegativeNumber()", () => {
        it("Deve retornar 'false' quando o parâmetro FOR positivo", () => {
            assert.equal(app.isNegativeNumber(22), false);
        });
        it("Deve retornar 'true' quando o parâmetro FOR negativo", () => {
            assert.equal(app.isNegativeNumber(-22), true);
        });
    });

    // Descreve os testes para a função 'isDivisible'
    describe("#isDivisible()", () => {
        it("Deve retornar 'true' quando o parâmetro 'dividend' FOR divisível perfeitamente pelo parâmetro 'divider'", () => {
            assert.equal(app.isDivisible(10, 5), true);
        });
        it("Deve retornar 'false' quando o parâmetro 'dividend' NÃO FOR divisível perfeitamente pelo parâmetro 'divider'", () => {
            assert.equal(app.isDivisible(10, 3), false);
        });
        it("Deve lançar um TypeError quando um parâmetro NÃO FOR um número", () => {
            assert.throws(() => app.isDivisible(null, 2), TypeError);
        });
    });

    // Descreve os testes para a função 'sumSmallerDivisibles'
    describe("#sumSmallerDivisibles()", () => {
        it("Deve retornar 23 quando o parâmetro da função for 10", () => {
            assert.equal(app.sumSmallerDivisibles(10), 23);
        });
        it("Deve retornar 33 quando o parâmetro da função for 11", () => {
            assert.equal(app.sumSmallerDivisibles(11), 33);
        });
        it("Deve lançar um TypeError quando o parâmetro da função NÃO FOR um número", () => {
            assert.throws(() => app.sumSmallerDivisibles(null), TypeError);
        });
    });

});

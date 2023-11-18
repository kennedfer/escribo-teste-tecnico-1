var assert = require("assert");
const app = require("./app");

describe("Testes Unitarios:", () => {
    describe("#isNotNumber()", () => {
        it("Deve retornar 'false' quando o parametro FOR um número", () => {
            assert.equal(app.isNotNumber(22), false)
        }), it("Deve retornar 'true' quando o parametro NÃO FOR um número", () => {
            assert.equal(app.isNotNumber(null), true)
        })
    }),

        describe("#isDivisible()", () => {
            it("Deve retornar 'true' quando o parametro 'dividend' FOR divisivel perfeitamente pelo parametro 'divider'", () => {
                assert.equal(app.isDivisible(10, 5), true)
            }), it("Deve retornar 'false' quando o parametro 'dividend' NÃO FOR divisivel perfeitamente pelo parametro 'divider'", () => {
                assert.equal(app.isDivisible(10, 3), false)
            }), it("Deve lançar um TypeError quando um parametro NÃO FOR um número", () => {
                assert.throws(() => app.isDivisible(null, 2), TypeError)
            })
        }),

        describe("#sumSmallerDivisibles()", () => {
            it("Deve retornar 23 quando o parametro da função for 10", () => {
                assert.equal(app.sumSmallerDivisibles(10), 23);
            }), it("Deve retornar 33 quando o parametro da função for 11", () => {
                assert.equal(app.sumSmallerDivisibles(11), 33);
            }), it("Deve lançar um TypeError quando o parametro da função NÃO FOR um número", () => {
                assert.throws(() => app.sumSmallerDivisibles(null), TypeError)
            })
        })
})
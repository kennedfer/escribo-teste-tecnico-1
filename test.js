var assert = require("assert");
const app = require("./app");

describe("Testes Unitarios:", () => {
    describe("#isDivisible()", () => {

        it("Deve retornar 'true' quando o parametro 'dividend' FOR divisivel perfeitamente pelo parametro 'divider'", () => {
            assert.equal(app.isDivisible(10, 5), true)
        }), it("Deve retornar 'false' quando o parametro 'dividend' NÃO FOR divisivel perfeitamente pelo parametro 'divider'", () => {
            assert.equal(app.isDivisible(10, 3), false)
        })
    }),

        describe("#sumSmallerDivisibles()", () => {
            it("Deve retornar 23 quando o parametro 'number' for 10", () => {
                assert.equal(app.sumSmallerDivisibles(10), 23);
            }), it("Deve retornar 33 quando o parametro 'number' for 11", () => {
                assert.equal(app.sumSmallerDivisibles(11), 33);
            })
        })
})
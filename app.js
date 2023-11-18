const { ErrorMessages } = require("./errors");

/**
 * Verifica se o valor fornecido não é um número (ou é NaN).
 * @param {any} value - O valor a ser verificado.
 * @returns {boolean} Retorna true se o valor não for um número (ou for NaN), caso contrário, retorna false.
 */
function isNotNumber(value) {
    return typeof (value) != "number" || isNaN(value);
}

/**
 * Verifica se o dividendo é (perfeitamente) divisível pelo divisor.
 * @param {number} dividend - O dividendo.
 * @param {number} divider - O divisor.
 * @throws {TypeError} Lança um erro se o dividendo ou divisor não forem números.
 * @returns {boolean} Retorna true se o dividendo for divisível pelo divisor, caso contrário, retorna false.
 */
function isDivisible(dividend, divider) {
    if (isNotNumber(dividend) || isNotNumber(divider)) throw new TypeError(ErrorMessages.TYPE_ERROR);
    return dividend % divider == 0;
}

/**
 * Verifica se o numero é negativo
 * @param {number} number - O número a ser verificado
 * @returns {boolean} Retorna true se o valor for menor que 0, caso contrário, retorna false
 */
function isNegativeNumber(number) {
    return number < 0;
}

/**
 * Soma todos os números menores que o número fornecido que são divisíveis por 3 ou 5.
 * @param {number} number - O número limite.
 * @throws {TypeError} Lança um erro se o número não for um número
 * @throws {RangeError} Lança um erro se o número for negativo.
 * @returns {number} Retorna a soma dos números menores que o número fornecido que são divisíveis por 3 ou 5.
 */
function sumSmallerDivisibles(number) {
    if (isNotNumber(number)) throw new TypeError(ErrorMessages.TYPE_ERROR);
    if (isNegativeNumber(number)) throw new RangeError(ErrorMessages.RANGE_ERROR);

    let sum = 0;

    while (number > 3) {
        number--;
        if (isDivisible(number, 5) || isDivisible(number, 3)) {
            sum += number;
        }
    }

    return sum;
}

module.exports = { isNotNumber, isDivisible, sumSmallerDivisibles }
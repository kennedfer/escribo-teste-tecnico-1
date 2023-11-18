function isNotNumber(value) {
    return typeof (value) != "number" || isNaN(value);
}

function isDivisible(dividend, divider) {
    if (isNotNumber(dividend) || isNotNumber(divider)) throw new TypeError("Parametros devem ser números!");
    return dividend % divider == 0;
}

function sumSmallerDivisibles(number) {
    if (isNotNumber(number)) throw new TypeError("Parametros devem ser números!");

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
function notIsNumber(value) {
    return typeof (value) != "number";
}

function isDivisible(dividend, divider) {
    if (notIsNumber(dividend) || notIsNumber(divider)) throw new TypeError("Parametros devem ser números!");
    return dividend % divider == 0;
}

function sumSmallerDivisibles(number) {
    if (notIsNumber(number)) throw new TypeError("Parametros devem ser números!");

    let sum = 0;

    while (number > 3) {
        number--;
        if (isDivisible(number, 5) || isDivisible(number, 3)) {
            sum += number;
        }
    }

    return sum;
}
console.log(sumSmallerDivisibles(null));
module.exports = { isDivisible, sumSmallerDivisibles }
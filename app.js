function isDivisible(dividend, divider) {
    if (notIsNumber(dividend) || notIsNumber(divider)) return "";
    return dividend % divider == 0;
}

function sumSmallerDivisibles(number) {
    let sum = 0;

    while (number > 3) {
        number--;
        if (isDivisible(number, 5) || isDivisible(number, 3)) {
            sum += number;
        }
    }

    return sum;
}

module.exports = { isDivisible, sumSmallerDivisibles }
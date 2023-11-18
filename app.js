function isDivisible(dividend, diviser) {
    return dividend % diviser == 0;
}

function sumDivideds(number) {
    let sum = 0;

    while (number > 3) {
        number--;
        if (isDivisible(number, 5) || isDivisible(number, 3)) {
            sum += number;
        }
    }

    return sum;
}
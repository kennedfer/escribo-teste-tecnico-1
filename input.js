const app = require("./app");
const readLine = require("readline");

const read = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(typeof (NaN));

read.question("Digite um número: ", respose => {
    try {
        const number = parseInt(respose)
        console.log(app.sumSmallerDivisibles(number));
    } catch (error) {
        console.log(error);
    } finally {
        read.close();
    }

})
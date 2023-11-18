const app = require("./app");
const readLine = require("readline");

const read = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

read.question("Digite um número: ", respose => {
    try {
        const number = parseInt(respose)
        console.log("Soma dos números menores que o seu número: " + app.sumSmallerDivisibles(number));
    } catch (error) {
        console.log(error);
    } finally {
        read.close();
    }

})
// Importa o módulo 'app' que contém as funções a serem utilizadas
const app = require("./app");

// Importa o módulo 'readline' para ler input do console
const readLine = require("readline");

// Cria uma interface de leitura para ler input do console
const read = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pede ao usuário para digitar um número
read.question("Digite um número: ", response => {
    try {
        // Tenta converter a resposta do usuário para um número inteiro
        const number = parseInt(response);

        // Chama a função 'sumSmallerDivisibles' do módulo 'app' e exibe o resultado
        console.log("Soma dos números menores que o seu número: " + app.sumSmallerDivisibles(number));
    } catch (error) {
        // Captura erros, se houverem, e exibe a mensagem de erro
        console.error(error.message);
    } finally {
        // Fecha a interface de leitura do console, independentemente do resultado
        read.close();
    }
});

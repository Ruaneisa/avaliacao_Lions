
function askImpar(){
    process.stdout.write("Digite um número: ");
}

let numeroImpar = "";

function verificarImpar(number){
    return number % 2 !== 0;
}

process.stdin.on("data", (data) =>{
    numeroImpar = parseInt(data, 10);

    if (!isNaN(numeroImpar)) { 
        if (verificarImpar(numeroImpar)) {
            process.stdout.write(`O número: ${numeroImpar} é ímpar\n`);
        } else {
            process.stdout.write(`O número: ${numeroImpar} é par\n`);
        }
        process.exit(); 
    } else {
        process.stdout.write("Por favor, digite um número válido.\n");
        askImpar(); 
    }
});

askImpar();
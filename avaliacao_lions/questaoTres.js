// Escreva um código que determine se um número é múltiplo de 3 e exiba uma mensagem correspondente no console, sem utilizar funções.

process.stdout.write("Digite um número: ");

process.stdin.on("data", (data) =>{
    let numero = parseInt(data.toString().trim(), 10);
    if(isNaN(numero)){
        console.log("Insira um número válido.");
    } else{
        if(numero%3 === 0){
            process.stdout.write(`${numero} é múltiplo de 3.`);
        } else{
            process.stdout.write(`${numero} não é múltiplo de 3.`);
            process.exit();
        }
    }
});



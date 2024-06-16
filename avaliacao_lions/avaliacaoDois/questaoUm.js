process.stdin.setEncoding("utf-8");

function askValor(){
    process.stdout.write("Digite um valor: ");
}

let valor = "";

process.stdin.on("data", (data) =>{
    valor = parseInt(data, 10);

    if(!isNaN(valor)){
        process.stdout.write(`o número digitado é: ${valor}`);
        process.exit();
    }else {
        process.stdout.write("Por favor, digite um número válido. \n");
        askValor();
    }
});
askValor();
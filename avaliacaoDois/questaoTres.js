process.stdin.setEncoding("utf-8");

let numeroInput = "";

process.stdout.write("Digite um número: ");

process.stdin.on("data", (data) =>{
    numeroInput = parseInt(data, 10);

    if(!isNaN(numeroInput)){
        if(numeroInput%2 !==0){
            process.stdout.write(`O número é impar, valor informado: ${numeroInput}`);
        } else{
            process.stdout.write(`O número é par, valor informado: ${numeroInput}`);
        }
        process.exit();
    } else{
        process.stdout.write("Por favor, informe um número válido. \n");
        process.stdout.write("Digite um número: ");
    }
});

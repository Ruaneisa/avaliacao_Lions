process.stdin.setEncoding("utf-8");

function askValorIdade(){
    process.stdout.write("Informe sua idade: ");
}

let valorIdade = "";
let mensagem = "Por favor, digite uma idade válida.";

process.stdin.on("data", (data) =>{
    valorIdade = parseInt(data, 10);

    if(!isNaN(valorIdade)){
        if(valorIdade>=18){
            process.stdout.write(`Você é maior de idade, você tem: ${valorIdade} anos`);
            process.exit();
        }else if(valorIdade>0 && valorIdade<18){
            process.stdout.write(`Você não é maior de idade, você tem: ${valorIdade} anos`);
            process.exit();
        } else{
            console.log(mensagem);
            askValorIdade();
        }
    } else{
        console.log(mensagem);
        askValorIdade();
    }
});
askValorIdade();

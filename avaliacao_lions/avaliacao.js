// Uma variável é uma alocação na memorioa temporária que serve para reter um dado. Usado para refenciar, editar ou manipular ao decorrer do código.

function askAge(){
    process.stdout.write("Qual sua idade? ");
}

let userAge = "";

process.stdin.on("data", (data) =>{
    userAge = parseInt(data, 10);
    
    if((!isNaN(userAge)) && (userAge >0)){
        process.stdout.write(`Sua idade é de: ${userAge} anos`);
        process.exit();
    } else{
        process.stdout.write("Por favor, insira um número válido." + "\n");
        askAge();
    }
});

askAge();
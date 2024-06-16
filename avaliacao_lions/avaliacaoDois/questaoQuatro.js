process.stdin.setEncoding("utf-8");

let temperatura = "";
let mensagem;

process.stdout.write("Informe uma temperatura: ");

process.stdin.on("data", (data) =>{
    temperatura = parseFloat(data.toString().trim());

    if(!isNaN(temperatura)){
        if (temperatura >= 35) {
            process.stdout.write("Está muito quente.");
        } else {
            process.stdout.write("Está agradável.");
        }
        process.exit();
    } else{
        process.stdout.write("Por favor, digite um número válido.\n");
        process.stdout.write("Informe uma temperatura: ");
    }
});

// A estrutura de condiconais if e else é onde o código será executado, onde verifica se o valor inserido no terminal é um número ou não e caso a primeira condição seja atendida
// a as duas condições seguintes verificam se é acima de 35 ou menor. E o process.stdout é onde a mensagem será impressa. 
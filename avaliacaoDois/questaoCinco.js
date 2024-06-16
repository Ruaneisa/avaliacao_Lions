process.stdin.setEncoding("utf-8");

let numeros = [-1, -2, 3, 4, -5];
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < 0) {
        soma += numeros[i];
    }
}
console.log(soma);

//o porcorre a lista numeros e imprime o valor final da soma somente dos números negativos. O for será a estrutura de repetição e a condição de parada é até que "i" seja
// menor que o tamanho do array numeros.
// A condição que verifica se o número é menor 0 e então o número que é acessado pelo íncide "i"(numeros[i]) intera a variável soma.
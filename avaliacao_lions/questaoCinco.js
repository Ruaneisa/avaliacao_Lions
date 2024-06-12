let numeros = [1, 2, 3, 4, 5];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 != 0) {
        soma += numeros[i];
    }
}
console.log(soma);

// o código tem um array com inteiros, uma variável soma que inicia com valor 0. A condição de parada é até quando "i" for nemor que o tamanho do array.
// no for ele irá percorrer todos os elementos do array "numeros" e irá acrescer a soma todos os valores impares.
//a variável "numero[i]" corresponde ao indice do array, que "puxa" o valor armazenado no array.
// no final do códgio será printado o valor final de soma.
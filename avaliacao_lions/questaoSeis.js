let numeros = [1, 2, 3, 4, 5];
 let numerosPares = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        numerosPares.push(numeros[i]);
    }
}
console.log(numerosPares);

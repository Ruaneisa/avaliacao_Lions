process.stdin.setEncoding("utf-8");

let numeros = [1, -2, 3, -4, 5];
let numerosPositivos = [];

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] > 0){
        numerosPositivos.push(numeros[i]);
    }
}

console.log(numerosPositivos);
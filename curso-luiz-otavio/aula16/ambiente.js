
function soma(num1, num2) {
    let resultado = num1 + num2;
    return resultado;
}

let numero = soma(93,7);
console.log(numero);

console.log(parOuImpar(numero));

function parOuImpar(numero) {
    let parOuImpar = numero % 2;
    if (parOuImpar == 0) {
        return 'par';
    } else { 
        return 'impar';
    }
}

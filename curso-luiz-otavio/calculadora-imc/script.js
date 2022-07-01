const nome = document.querySelector('#nome');
const idade = document.querySelector('#idade');
const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
let resultado = document.querySelector('#resultado');

function calcular() {
    const imc = (peso.value / (altura.value * altura.value)).toFixed('1');
    resultado.innerHTML = `Olá ${nome.value} seu IMC é ${imc}`;
}
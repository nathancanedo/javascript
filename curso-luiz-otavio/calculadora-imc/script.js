const nome = document.querySelector('#nome');
const idade = document.querySelector('#idade');
const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
let resultado = document.querySelector('#resultado');

function calcular() {
    const imc = (peso.value / (altura.value * altura.value)).toFixed('1');
    resultado.innerHTML = `Olá ${nome.value}! Seu IMC é ${imc}`;

    if (idade.value < 60) {
        if (imc <= 18.4) {
            resultado.innerHTML += '<p>Você está com <strong>déficit de massa corporal</strong>. Procure um nutricionista!</p>';
        }
        else if (imc < 25) {
            resultado.innerHTML += '<p>Seu IMC está <strong>normal</strong>. Continue mantendo hábitos saudáveis e visite o médico regularmente.';
        }

        else if (imc < 30) {
            resultado.innerHTML += '<p>Você está com <strong>sobrepeso</strong>. Procure um nutricionista!</p>';
        }
        
        else if (imc < 35) {
            resultado.innerHTML += '<p>Você está com <strong>obesidade leve</strong>. Procure um nutricionista!</p>';
        }

        else if (imc < 40) {
            resultado.innerHTML += '<p>Você está com <strong>obesidade média</strong>. Procure um nutricionista!</p>';
        }

        else if (imc >= 40) {
            resultado.innerHTML += '<p>Você está com <strong>obesidade mórbida</strong>. Procure um nutricionista!</p>';
        }
    }
}
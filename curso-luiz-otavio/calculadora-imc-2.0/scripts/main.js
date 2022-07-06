function pegarDados() {
    const peso = Number(document.querySelector('#peso').value);
    const altura = Number(document.querySelector('#altura').value);
    
    calcular(peso, altura);
}

function calcular(peso, altura) {
    const imc = (peso / (altura ** 2)).toFixed(2);
    
    resultado(imc);
}

function resultado(imc){
    const resultado = document.querySelector('#resultado');
    if (imc < 18.5) {
        resultado.innerHTML = `Seu IMC é ${imc} (Abaixo do peso)`;
    } else if (imc < 25) {
        resultado.innerHTML = `Seu IMC é ${imc} (Peso normal)`;
    } else if (imc < 30) {
        resultado.innerHTML = `Seu IMC é ${imc} (Sobrepeso)`;
    } else if (imc < 35) {
        resultado.innerHTML = `Seu IMC é ${imc} (Obesidade grau 1)`;
    } else if (imc < 40) {
        resultado.innerHTML = `Seu IMC é ${imc} (Obesidade grau 2)`;
    } else if (imc >= 40) {
        resultado.innerHTML = `Seu IMC é ${imc} (Obesidade grau 3)`;
    }
}
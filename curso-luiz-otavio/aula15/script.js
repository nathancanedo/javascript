const elementoNumero = document.querySelector
('#numero');

let numero;


function calcular() {
    numero = Number(document.querySelector('#inputNumero').value);
    const resultado = document.querySelector('#resultado');

    if (numero == 0) {
        resultado.toggleAttribute('hidden');
    } else {

    resultado.removeAttribute('hidden');

    elementoNumero.innerHTML = ' ' + numero;

    // Raiz Quadrada
    const elementoRaizQuadrada = document.querySelector('#raiz');
    const raizQuadrada = numero ** 0.5;
    elementoRaizQuadrada.innerHTML = ' ' + raizQuadrada;

    // É inteiro?
    const elementoInteiro = document.querySelector('#inteiro');
    const inteiro = Number.isInteger(numero);

    if (inteiro == true) {
        elementoInteiro.innerHTML = ' Sim';
    } else {
        elementoInteiro.innerHTML = ' Não';
    }

    // É NaN? 
    const elementoNan = document.querySelector('#nan');
    const nan = isNaN(numero);

    if (nan == true) {
        elementoNan.innerHTML = ' Sim';
    } else {
        elementoNan.innerHTML = ' Não';
    }

    // Arredondado para cima
    const elementoCima = document.querySelector('#cima');
    const arredondadoParaCima = Math.ceil(numero);
    elementoCima.innerHTML = ' ' + arredondadoParaCima;

    // Arredondado para baixo
    const elementoBaixo = document.querySelector('#baixo');
    const arredondadoParaBaixo = Math.trunc(numero);
    elementoBaixo.innerHTML = ' ' + arredondadoParaBaixo;

    // Duas casas decimais
    const elementoDecimal = document.querySelector('#decimais');
    const duasCasasDecimais = numero.toFixed(2);
    elementoDecimal.innerHTML = ' ' + duasCasasDecimais;

    }
}
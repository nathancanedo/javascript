function pegarDados() {
    const form = document.querySelector('#form');
    form.addEventListener('submit', event => {event.preventDefault();});

    const peso = Number(document.querySelector('#peso').value);
    const altura = Number(document.querySelector('#altura').value);
    
    const imc = calcular(peso, altura);
    resultado();

    function calcular(peso, altura) {
        const imc = (peso / (altura ** 2)).toFixed(2);          
        return imc;
    }
    
    function resultado() {
        const resultado = document.querySelector('#resultado');

        if ((peso <= 0 && altura <= 0) || (isNaN(peso) && isNaN(altura)) || (isNaN(peso) && altura <= 0) || (peso <=0 && isNaN(altura))) {
            resultado.innerHTML = '<p class="vermelho">Peso e Altura inválidos!</p>';
        } else if (peso <= 0 || isNaN(peso)) { 
            resultado.innerHTML = '<p class="vermelho">Peso Inválido!</p>';
        } else if (altura <= 0 || isNaN(altura)) {
            resultado.innerHTML = '<p class="vermelho">Altura Inválida!</p>';
        } else if (imc < 18.5) {
            resultado.innerHTML = `<p class="verde">Seu IMC é ${imc} (Abaixo do peso)</p>`;
        } else if (imc < 25) {
            resultado.innerHTML = `<p class="verde">Seu IMC é ${imc} (Peso normal)</p>`;
        } else if (imc < 30) {
            resultado.innerHTML = `<p class="verde">Seu IMC é ${imc} (Sobrepeso)</p>`;
        } else if (imc < 35) {
            resultado.innerHTML = `<p class="verde">Seu IMC é ${imc} (Obesidade grau 1)</p>`;
        } else if (imc < 40) {
            resultado.innerHTML = `<p class="verde">Seu IMC é ${imc} (Obesidade grau 2)</p>`;
        } else if (imc >= 40) {
            resultado.innerHTML = `<p class="verde">Seu IMC é ${imc} (Obesidade grau 3)</p>`;
        }
    }
}

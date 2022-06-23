let numero = 0
let soma = document.querySelector('#numero')
let numeroMeta
let btnAdd1 = document.querySelector('#add1')
let btnZerar = document.querySelector('#zerar')

function definirMeta() {
    soma.innerHTML = `<input type="number" name="meta" id="meta"><input type="button" value="Definir" onclick="meta()">`
    }
function meta() { 
    numeroMeta = Number(document.getElementById('meta').value)
    if (numeroMeta <= 0 ){
        alert('[ERRO] A meta não pode ser 0, nem um número negativo!')
    } else if (numeroMeta < numero)  {
        alert(`Você está no ${numero}, essa meta já foi atingida!`)
    } else {
    document.getElementById('btnMeta').innerHTML = '<input type="button" value="Definir outra meta" onclick="definirMeta()">'
    document.getElementById('txtMeta').innerHTML = `Sua meta é ${numeroMeta}`
    btnAdd1.removeAttribute('disabled')
    btnZerar.removeAttribute('disabled')
    soma.innerHTML = numero + '/' + numeroMeta
    }
}

function add1() {
    if (numero < numeroMeta) {
        numero += 1
        soma.innerHTML = numero + '/' + numeroMeta
    }

    if (numeroMeta == numero) {
        soma.innerHTML = `${numero}! Sua meta foi atingida.`
    }
}

function zerar() {
    numero = 0
    soma.innerHTML = numero + '/' + numeroMeta
    document.getElementById('txtMeta').innerHTML = `Sua meta é ${numeroMeta}`
}

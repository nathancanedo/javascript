const numeros = []
let divRes = document.getElementById('res')

function adicionar(){
    let txtNumero = document.getElementById('numero')
    let lista = document.getElementById('lista')
    let numero = Number(txtNumero.value)

    divRes.innerHTML = ''

    if (txtNumero.value.length == 0 || numero > 100 || numero < 1 || numeros.indexOf(numero) != -1) {
        alert('Valor inválido ou já encontrado na lista!')
    } else {
        let option = document.createElement('option')
        option.text = `Valor ${numero} adicionado`
        lista.appendChild(option)
        numeros.push(numero)
    }
    txtNumero.value  = ''
    txtNumero.focus()
}
function finalizar(){
    if (numeros.length == 0){
        alert('Adicione valores antes de finalizar!')
    } else {
        let soma = numeros.reduce(function(soma, i) {
            return soma + i
        });
        let media = numeros.reduce(function(){
            return soma / numeros.length
        } )

        divRes.innerHTML = `<p>Ao todo, temos ${numeros.length} números cadastrados.</p>
        <p>O maior valor informado foi ${Math.max(...numeros)}.</p>
        <p>O menor valor informado foi ${Math.min(...numeros)}.</p>
        <p>Somando todos os valores, temos ${soma}.</p>
        <p>A média dos valores digitados é ${media}.</p>`
    }
}


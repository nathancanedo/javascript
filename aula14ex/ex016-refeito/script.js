function contar() {
    let inicio = document.getElementById('inicio').value
    let fim = document.getElementById('fim').value
    let passo = document.getElementById('passo').value
    let contagem = document.getElementById('contagem')
    
    if (inicio.length == 0 || fim.length == 0 || passo.length == 0){
        contagem.innerHTML = "Impossível Contar!"
    } else {
        contagem.innerHTML = 'Contando:<br>'
        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)
        if (p <= 0){
            alert('Passo Inválido! Considerando PASSO 1!')
            p = 1
        }
        if (i < f) {
            // ordem crescente
            for (let c = i; c <= f; c += p) {
                contagem.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            // ordem decrescente
            for (let c = i; c >= f; c -= p) {
                contagem.innerHTML += ` ${c} \u{1F449}`
            }
        }
        contagem.innerHTML += `\u{1F3C1}`
    }
}

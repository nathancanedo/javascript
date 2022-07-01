function gerarTabuada() {
    
    let multiplicando = document.getElementById('multiplicando').value
    let tabuada = document.getElementById('tabuada')
    tabuada.options.length = 0
    let mensagem = document.getElementById('msg')
    if (multiplicando == "") {
        alert('Por favor, digite um número.')
        let option = document.createElement('option')
        option.text = `Digite um número acima`
        tabuada.appendChild(option) 

    } else {
        for (var multiplicador = 1; multiplicador <= 10; multiplicador++) {
            let produto = multiplicando * multiplicador
            let option = document.createElement('option')
            option.text = `${multiplicando} x ${multiplicador} = ${produto}`
            option.value + `x${multiplicador}`
            tabuada.appendChild(option) 
        }
    }
}
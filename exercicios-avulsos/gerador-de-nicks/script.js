function gerarNick() {
    
    const nomesFem = ['Capivara', 'Banana', 'Maju', 'Feijoada', 'Anã', 'Fimose']
    const nomesMasc= ['Faustão', 'Sepp', 'Cid', 'Celso', 'Anão', 'Cavalo' ,'Frosty', 'Feld']
    const adjetivosFem = ['Obesa', 'Grávida', 'Chapada', 'Rebaixada', 'Bombada', 'Defeituosa']
    const adjetivosMasc = ['Obeso', 'Chapado', 'Grávido', 'Rebaixado', 'Bombado', 'Defeituoso']
    const adjetivosNeutros = ['DeMonza', 'Careca', 'ComTuberculose', '4e20']

    var nome = ''            // nomes[sorteioNome]
    var adjetivo = ''       // adjetivos[sorteioAdjetivo]
    // var nickSorteado = ''  // nome + adjetivo

    var nick = document.getElementById('nick')

    var sorteioGenero = parseInt(Math.random()*2) // decide se o nick vai ser masculino ou feminino | 0 = Fem e 1 = Masc

    if (sorteioGenero == 0){
        // Nick Feminino
        var sorteioNomeFem = parseInt(Math.random() * nomesFem.length)
        nome = nomesFem[sorteioNomeFem]
        var sorteioGeneroAdjFem = parseInt(Math.random() * 2) // decide se o genero do adjetivo vai ser feminino ou neutro | 0 = fem e 1 = neutro
        if (sorteioGeneroAdjFem == 0){
            // Adjetivo feminino
            var sorteioAdjetivoFem = parseInt(Math.random() * adjetivosFem.length)
            adjetivo = adjetivosFem[sorteioAdjetivoFem]
            

        } else {
            // Adjetivo neutro feminino
            var sorteioAdjetivoNeutroFem = parseInt(Math.random() * adjetivosNeutros.length)
            adjetivo = adjetivosNeutros[sorteioAdjetivoNeutroFem]

        }
    } else {
        // Nick masculino
        var sorteioNomeMasc = parseInt(Math.random() * nomesMasc.length)
        nome = nomesMasc[sorteioNomeMasc]
        var sorteioGeneroAdjMasc =  parseInt(Math.random() * 2)
        if (sorteioGeneroAdjMasc == 0) {
            // Adjetivo Masculino
            var sorteioAdjetivoMasc = parseInt(Math.random() * adjetivosMasc.length)
            adjetivo = adjetivosMasc[sorteioAdjetivoMasc]

        } else {
            // Adjetivo Neutro Masculino
            var sorteioAdjetivoNeutroMasc = parseInt(Math.random() * adjetivosNeutros.length)
            adjetivo = adjetivosNeutros[sorteioAdjetivoNeutroMasc]
        }
    }

    // nickSorteado = 
    nick.innerHTML = nome + adjetivo

}

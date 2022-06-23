function verificar() {
    var data  = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#resultado')
    if(fAno.value.length == 0 || Number(fAno.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fSex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 12){
                // Criança
                img.setAttribute('src', 'bebe-h.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-h.png')
                
            } else if ( idade < 60){
                // Adulto
                img.setAttribute('src', 'adulto-h.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso-h.png')
            }
        } else if (fSex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12){
                // Criança
                img.setAttribute('src', 'bebe-m.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 60){
                // Adulto
                img.setAttribute('src', 'adulta-m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idosa-m.png')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(img)
    }

}
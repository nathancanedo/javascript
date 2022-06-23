let numeroSerie = 0
let serie = document.querySelector('#series')
let buttons = document.querySelector('#buttons')

function add1() {
    if(numeroSerie < 2) {
    numeroSerie += 1
    serie.innerHTML = numeroSerie + '/3'
    } else if (numeroSerie == 2) {
        numeroSerie += 1
        serie.innerHTML = '3/3'
        buttons.innerHTML = '<input type="button" value="Próximo Exercício" onclick="zerar()">'
    }
}
 
function zerar() {
    numeroSerie = 0
    buttons.innerHTML = '<input type="button" value="+1" onclick="add1()"></input>'
    serie.innerHTML = '0/3'
}
function calcularNotas(){
var nota1 = parseFloat(document.getElementById("nota1").value)
var nota2 = parseFloat(document.getElementById("nota2").value)
var nota3 = parseFloat(document.getElementById("nota3").value)
var nota4 = parseFloat(document.getElementById("nota4").value)
var notaFinal = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(2)
var div = document.getElementById('teste')

if (notaFinal < 6){
    document.getElementById("aprovacao").innerHTML = "Infelizmente você foi reprovado!"

} else {
    document.getElementById("aprovacao").innerHTML = `Você foi aprovado! :)`
    var img = document.createElement('img')
    img.setAttribute('src', 'jovem-m.png')
    div.appendChild(img)
    
}

if (nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0){
    alert("Nota inválida!")
    document.getElementById("aprovacao").innerHTML = ""
} else if (nota1 > 10 || nota2 > 10 || nota3 > 10 || nota4 > 10){
    alert("Nota inválida!")
    document.getElementById("aprovacao").innerHTML = ""
}else if (isNaN(notaFinal)) {
    alert("Nota inválida")
    document.getElementById("aprovacao").innerHTML = ""
} else {
document.getElementById("resultado").innerHTML= `Sua média final foi ${notaFinal}`
}




}

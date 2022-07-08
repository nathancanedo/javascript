const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil)

function formataData() {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}
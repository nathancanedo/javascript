let px = document.querySelector('#px')
let em = document.querySelector('#em')

function pxParaEm() {
    let valorPx = px.value / 16
    em.value = valorPx
}

function emParaPx() {
    let valorEm = em.value * 16
    px.value = valorEm
}
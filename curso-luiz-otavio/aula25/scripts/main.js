function iniciarScript(){
    const horario = document.querySelector('h1');
    const data = new Date();
    horario.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});
}
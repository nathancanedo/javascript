function iniciarScript() {
    exibirData();

    function exibirData() {
        const horario = document.querySelector('h1');
        horario.innerHTML = dataAtual();
        
    }

    function dataAtual() {
        const data = new Date();
        const diaDaSemana = nomeDiaDaSemana(data.getDay());
        const dia = data.getDate();
        const mes = nomeDoMes(data.getMonth());
        const ano = data.getFullYear();
        const hora = data.getHours();
        const minutos = data.getMinutes();

        function zeroAEsquerda(num) {
            return num >= 10 ? num : `0${num}`;
        }
        
        return `${diaDaSemana}, ${dia} de ${mes} de ${ano}<br>${zeroAEsquerda(hora)}:${zeroAEsquerda(minutos)}`;    

        function nomeDiaDaSemana(numeroDaSemana) {
            const diaSemana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
            return diaSemana[numeroDaSemana];
    }

        function nomeDoMes(numeroDoMes) {
            const nomeMes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', ' Outubro', 'Novembro', 'Dezembro'];
            return nomeMes[numeroDoMes];
        }
    }
}
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

        return `${diaDaSemana}, ${dia} de ${mes} de ${ano}<br>${zeroAEsquerda(hora)}:${zeroAEsquerda(minutos)}`;

        function nomeDiaDaSemana(numeroDaSemana) {
            switch (numeroDaSemana) {
                case 0:
                    return 'Domingo';
                case 1: 
                    return 'Segunda-Feira';
                case 2: 
                    return 'Terça-Feira';
                case 3: 
                    return 'Quarta-Feira';
                case 4: 
                    return 'Quinta-Feira';
                case 4: 
                    return 'Quinta-Feira';
                case 5: 
                    return 'Sexta-Feira';
                case 6: 
                    return 'Sabádo';
        }
    }

        function nomeDoMes(numeroDoMes) {
            switch(numeroDoMes) {
                case 0:
                    return 'Janeiro';
                case 1:
                    return 'Fevereiro';
                case 2:
                    return 'Março';
                case 3:
                    return 'Abril';
                case 4:
                    return 'Maio';
                case 5:
                    return 'Junho';
                case 6:
                    return 'Julho';
                case 7:
                    return 'Agosto';
                case 8:
                    return 'Setembro';
                case 9:
                    return 'Outubro';
                case 10:
                    return 'Novembro';
                case 11:
                    return 'Dezembro';        
            }
        }

        function zeroAEsquerda(num){
            return num >= 10 ? num : `0${num}`
        }
    }
}
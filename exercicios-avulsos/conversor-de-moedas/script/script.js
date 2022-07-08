const request = require('request');
const moedas = 'USD-BRL,BTC-USD,BRL-USD';

const option = {
    url: `https://economia.awesomeapi.com.br/last/${moedas}`,
    method: 'GET',
    Headers: {
        'Accept': 'application/json', 
        'Accept-Charset': 'utf-8'
    }
}

const callbackDolar = function(erro, res, body){
    let json = JSON.parse(body);
    const cotacaoDolar = json.USDBRL['bid'];
    console.log(cotacaoDolar);
}

request(option, callbackDolar);
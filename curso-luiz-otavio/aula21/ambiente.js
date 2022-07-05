const horario = { 
    hora: new Date().getHours(),
    minuto: new Date().getMinutes()
}
console.log(`Agora são ${horario.hora} horas e ${horario.minuto} minutos.`);

if (horario.hora >= 0 && horario.hora <= 5) {
    console.log('Boa Madrugada');
} else if (horario.hora >= 6 && horario.hora <= 11) {
    console.log('Bom dia');
} else if (horario.hora >= 12 && horario.hora <= 18) {
    console.log('Boa tarde')
} else if (horario.hora >= 19) {
    console.log('Boa noite');
}

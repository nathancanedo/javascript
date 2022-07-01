let amigo = {nome: 'José', 
sexo: 'Masculino', 
peso:85.4,
engordar(p=0){
console.log('Engordou')
    this.peso += p
}}

amigo.engordar(2)
console.log(`O nome é ${amigo.nome}, o sexo é ${amigo.sexo} e o peso é ${amigo.peso}Kg`)
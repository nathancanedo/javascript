// (condição) ? verdadeiro : false

const userPoints = 1000;
const userNivel = userPoints >= 1000 ? 'Usuário VIP' : 'Usuário Comum';

const corUsuario = 'Verde';
const corPadrao = corUsuario || 'Preta';

console.log(userNivel);
console.log(corPadrao);

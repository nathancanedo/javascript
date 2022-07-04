function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade }; 
    /* 
    nome = nome
    sobrenome = sobrenome
    idade = idade
    */
}

const pessoa1 = criaPessoa('Carlos', 'Mendonça', 35);
const pessoa2 = criaPessoa('Lia', 'Souza', 65);
const pessoa3 = criaPessoa('Lucas', 'Soares', 45);
const pessoa4 = criaPessoa('Ricardo', 'Silveira', 25);
const pessoa5 = criaPessoa('Mauricio', 'Lima', 54);

console.log(pessoa1.nome, pessoa5.nome);


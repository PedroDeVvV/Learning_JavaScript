

//OBJETOS (BÁSICO)
const pessoa1 = { //usam chaves e tem virgula no final.
    nome: 'Pedro',
    sobrenome: 'Henrique',
    idade: 18
};

const pessoa2 = { 
    nome: 'Tiago',
    sobrenome: 'Camara',
    idade: 19
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoa3 = criaPessoa('Pedro', 'Henrique', 18)
const pessoa4 = criaPessoa('Paulo', 'Gustavo', 38)
const pessoa5 = criaPessoa('André', 'Mattos', 27)
const pessoa6 = criaPessoa('Gabe', 'Malkar', 21)
const pessoa7 = criaPessoa('Felps', 'Osório', 20)

console.log(pessoa1.nome, pessoa2.nome);

const pessoa8 = {
    nome: 'Pedro',
    sobrenome: 'Henrique',
    idade: 18,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} tem ${this.idade} anos e está falando oi...`);
    },

    incrementaIdade() {
        ++this.idade;
    }
};
pessoa1.fala();

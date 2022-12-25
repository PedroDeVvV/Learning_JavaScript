const obj = {
    nome: 'Pedro',
    idade: '18',
};

const idade = 'idade';
console.log(obj.nome)
console.log(obj[idade]);


//Maneias de declarar: construtor
const pessoa1 = new Object();
pessoa1.nome = 'Pedro';
pessoa1.idade = '18';
delete pessoa1.nome
//Metódos
pessoa1.falarIdade = function () {
    return `${this.idade} é a sua idade`;
}

pessoa1.getBornDate = function () {
    const anoAtual = new Date();
    const anoNascimento = anoAtual.getFullYear() - this.idade;
    return anoNascimento + ' é o seu ano de nascimento';
}

console.log(pessoa1.falarIdade());
console.log(pessoa1.getBornDate());

//Factory functions / Constructor functions
//Ambos são designs patterns, posso escolher qual utilizar no projeto
//factory
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}, é o seu nome completo`;
        }
    };
}

const p1 = criaPessoa('Pedro', 'Henrique Gonçalves');
console.log(p1.nomeCompleto);

//Constructor
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); //nenhum objeto desta função poderá ser alterado(PODE SER PERIGOSO).
}

const pe1 = new Pessoa('Luiz', 'Otavio')
Object.freeze(pe1)//congelei o objeto, nada pode ser alterado
pe1.nome = 'Roberto' //não irá alterar
console.log(`${pe1.nome} objeto congelado`)
// {} <- this -> this
const pe2 = {};
pe2.nome = 'Luiz'
//basicamente é isso que o this faz
console.log(pe2.nome)



const _velocidade = Symbol('velocidade'); //criando uma propriedade que não pode ser acessada fora do objeto
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) { //set está previnindo erros e no final atribui esse valor ao this[_velocidade]
        console.log('SETTER')
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade() { //get 'tranforma' o metodo em atributo
        console.log('GETTER')
        return this[_velocidade]
    }

    acelerar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Koegnisseg')

c1.velocidade = 1500; //inutilizado pelo get e pelo symbol, funcionaria se fosse uma velocidade dentro do limite

c1.velocidade = 80; //uso o setter quando atribuo valores

console.log(c1.velocidade) //uso o getter quando solicito




//EXEMPLO 2 DE GETTERS/SETTERS

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa('Pedro', 'Silva');
p1.nomeCompleto = 'Pedro Henrique Gonçalves da Silva';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.nomeCompleto)
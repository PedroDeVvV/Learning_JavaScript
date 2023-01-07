//TypeOf das class são functions(áçucar sintático)
//class não sofrem hoisting, ou seja NÃO são isadas, impossivel chamar antes de declarar

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar() { //Os métodos são linkados diretamente no prototype do obj
        return console.log(`${this.nome} está falando`)
    }

    comer() {
        return console.log(`${this.nome} está comendo`)
    }

    beber() {
        return console.log(`${this.nome} está bebendo`)
    }
}


const p1 = new Pessoa('Pedro', 'Henrique')
const p2 = new Pessoa('Adair', 'Santana')
const p3 = new Pessoa('Reinaldo', 'Amaral')

console.log(p1)
console.log(p1.falar())
console.log(p2.comer())
console.log(p3.beber())

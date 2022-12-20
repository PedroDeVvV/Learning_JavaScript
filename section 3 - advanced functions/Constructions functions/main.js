//Função construtora -> objetos
//Função fábrica -> objetos
//Construtora -> inicia sempre com letra maiuscula (new Pessoa)
//não necessita do return

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function () {
        console.log(`${this.nome} ${this.sobrenome} : Estou chamando o método`);
    };
}


const p1 = new Pessoa('Pedro', 'Henrique');
const p2 = new Pessoa('Tiago', 'Camara');
const p3 = new Pessoa('Rami', 'Malek');
p1.metodo();
p2.metodo();
p3.metodo();

//console.log(p1, p2, p3)


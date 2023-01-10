//Can i use -> site para saber a compatibilidade com navegadores

const nome = 'Pedro';
const obj = { nome };
const novoObj = { ...obj };
console.log(novoObj);

//pedindo ao babel para converter em código 'antigo' --> npx babel main.js -o bundle.js --presets=@babel/env
//criará um arquivo bundle.js com o javascript antigo

//npm run converteBabel -->executando o arquivo json criado no terminal para carregar as alterações

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    falaNome() {
        console.log(`${this.nome} tem ${this.idade}.`)
    }
}

const p1 = new Pessoa('Pedro', 18);
p1.falaNome();
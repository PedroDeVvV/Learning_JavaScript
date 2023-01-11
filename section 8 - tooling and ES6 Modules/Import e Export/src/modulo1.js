const nome = 'Pedro';
const sobrenome = 'Henrique';
const idade = 18;

export function soma(x, y) {
    return x + y;
}

export default function soma2(x, y) {
    return x + y;
}

export { nome, sobrenome, idade as idade2 }; //importando tudo
//                          renomeando na exportação


//outra maneira de exportar

export const jogo = "Horizon forbidden west"
export const jogo2 = "God of war"

export class Pessoa {
    construtor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    falaNome() {
        console.log(`${this.nome} tem ${this.idade}.`)
    }
}

const cpf = 28636829376; // --> por mais que eu use * para exportar tudo, como não tem a palavra export ele não sera exportado


const carro = 'fusca'

//export {carro as default} //carro é a variavel padrão -> mas como soma2 já é a padrão dara erro 
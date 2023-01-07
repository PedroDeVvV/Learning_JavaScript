//Fora de escopos locais o this sempre se refere ao objeto global window
//Em objetos o this vai se referir a instância e pode acessar suas propriedades

// Exemplo 1

const jogo = {
    nome: 'God of War',

    mostrarNome() {
        console.log(this.nome) //this dentro do metodo só pega o this dentro do objeto
    }
}

const carro = {
    nome: 'Audi',

    trocarAno(ano) {
        this.ano = ano;
    }
}

jogo.mostrarNome.call(carro); //Estamos vinculando o método ao carro

carro.trocarAno.call(jogo, 2021); //Usando a 'herança para dar ano ao jogo, com o método dentro de carro.
console.log(jogo)

const anoJogo = carro.trocarAno.bind(jogo, 2025); //cria a função ligada ai cintexto ligado, por exemplo, anoJogo será uma função que retona idade do jogo.
anoJogo(); // retorna 2025 //bind vai ligar de volta ao contexto
console.log(jogo.ano)

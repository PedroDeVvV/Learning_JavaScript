// Factory function (Função fábrica)
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,

        // Getter
        get nomeCompleto() { //a palavra get 'converte' a função em um atributo da classe
            return `${this.nome} ${this.sobrenome}`; // this sempre vai se referir a quem o chamou
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' '); // corta o array
            this.nome = valor.shift();
            //this serve para referenciar a propriedade dentro do objeto
            this.sobrenome = valor.join(' '); //junta em uma string com separador
        },

        fala(assunto = 'falando sobre NADA') {
            return `${this.nome} está ${assunto}.`;
        },

        altura: a,
        peso: p,

        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Pedro', 'Henrique', 1.7, 70);
const p2 = criaPessoa(' Lucas', 'Otávio', 1.90, 57);
const p3 = criaPessoa('Gustavo', 'Lima', 1.5, 110);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);
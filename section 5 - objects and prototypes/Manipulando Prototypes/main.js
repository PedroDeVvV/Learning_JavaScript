//new Object -> Object.prototype
// const objA = {
//     chaveA: 'A',
//     //__proto__: Object.prototype
// };

// const objB = {
//     chaveB: 'B',
//     //__proto__: objA
// };

// //setando o prototype do objeto b mudando pra a
// Object.setPrototypeOf(objB, objA)
// console.log(objB.chaveA);
// console.log(Object.getPrototypeOf(objA));

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);

// Literal -> não posui os metodos do produto, então usamos o setPrototypeOf para passar o prototype também para ele
const p2 = {
    nome: 'Caneca',
    preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
});
p3.aumento(10);
console.log(p3);
// Produto -> aumento, desconto
// Camiseta = Cor, caneca = material
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function (quantia) { //depois de procurar no proto da camiseta, a engine procurara aqui
    this.preco += quantia;
};
Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function (percentual) { //quando for chamado Camiseta.aumento(), primeiro a engin e procurará no proto da Camiseta
    this.preco = this.preco + (this.preco * (percentual / 100));
};

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco)//chamando as propriedades que queremos aproveitar de produto(herança)
    this.material = material;//inserindo as propriedades adicionais da caneca
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function () { //pega o valor estoque
            return estoque;
        },
        set: function (valor) { //manipula o valor para aceitar somente number 
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    }); //inserindo as propriedades adicionais da caneca
}

Caneca.prototype = Object.create(Produto.prototype); //criar um objeto vazio e apontar o produto principal para
//servir de herança e usarmos nome e preço
Caneca.prototype.constructor = Caneca; //O contrutor seria produto já que apontamos para outro objeto,
//aqui estamos definindo a caneca como contructor

const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Caneca', 13, 'Plástico', 5);
caneca.estoque = 165;

console.log(caneca.estoque);
console.log(caneca);
console.log(camiseta);
console.log(produto);
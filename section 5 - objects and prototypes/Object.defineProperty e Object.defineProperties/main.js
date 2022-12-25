// definePropety -> uma
//defineProperties -> várias

function Produto(nome, preco, estoque) {
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //será exibido a chave
        value: estoque, //valor da chave
        writable: false, //posso alterar o valor do estoque?
        configurable: false, //a chave pode ser apagada, reconfigurada? caso seja true
        // é possivel criar outra propriedade com outros valores.
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, //será exibido a chave
            value: nome, //valor da chave
            writable: true, //posso alterar o valor do estoque?
            configurable: true, //a chave pode ser apagada, reconfigurada? caso seja true
            // é possivel criar outra propriedade com outros valores.
        },
        preco: {
            enumerable: true, //será exibido a chave
            value: preco, //valor da chave
            writable: true, //posso alterar o valor do estoque?
            configurable: true, //a chave pode ser apagada, reconfigurada? caso seja true
            // é possivel criar outra propriedade com outros valores.
        },
    });

}

const p1 = new Produto('Camiseta', 20, 3)
console.log(Object.keys(p1)); //exibirá as chaves do objeto
console.log(p1)
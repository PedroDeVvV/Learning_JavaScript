const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Henrique',
    idade: 18,
    endereco: {
        rua: 'Caminho do indio',
        numero: 287
    }
};


//Atribuição via desestruturação
const { endereco:
    { rua, numero },
    endereco }
    = pessoa;
console.log(rua);


const { nome, ...resto } = pessoa;

console.log(resto); //tudo exceto o nome, pois ficou separado na váriavél nome
//Some todos os números
//Retorne um array com os pares - Filter
//Retorne um array com o dobro dos valoe - map

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 4, 66, 34, 22, 27];
//ex1
const total = numeros.reduce(function (acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador;
}, 0); //sem esse valor, ele pegará o primeiro valor do array(5)
console.log(total)


//ex2
const pares = numeros.reduce(function (acumulador, valor, indice, array) {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);

console.log(pares);

//ex3
const dobro = numeros.reduce(function (acumulador, valor, indice, array) {
    acumulador.push(valor * 2);
    return acumulador;
}, []);

console.log(dobro);


//objetos
//Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Leana', idade: 21 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Henrique', idade: 18 },
    { nome: 'Rosângela', idade: 32 },
    { nome: 'Michel', idade: 47 },
];

const maisVelha = pessoas.reduce(function (acumulador, valor) {
    if (acumulador.idade > valor.idade) return acumulador; //comparando 2 propriedades do objeto pra ver quem é maior;
    return valor;
});

console.log(maisVelha);
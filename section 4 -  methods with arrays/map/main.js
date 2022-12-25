//Map -> altera valores do array
//Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 4, 66, 34, 22, 27];
const numerosDobro = numeros.map(function (valor, indice, array) {
    return valor * 2;
});

console.log(numerosDobro)

//arrow function
const numeroDobro = numeros.map(valor => valor * 2);
console.log(numeroDobro)


//Usando Objetos
//Para cada elemento
//Retorne apenas a primeira letra do nome da pessoa.
//Remova apenas a chave 'nome' do objeto
//Adicione uma chave id em cada objeto

const pessoasOriginal = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Leana', idade: 21 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Henrique', idade: 18 },
    { nome: 'Rosângela', idade: 32 },
    { nome: 'Michel', idade: 47 },
];

const pessoas = [...pessoasOriginal];

//ex1
const firstLetter = pessoas.map(function (obj) {
    return obj.nome[0];
});

console.log(firstLetter);

//arrow function
const firstLetter2 = pessoas.map(obj => obj.nome[0]);
console.log(firstLetter2);

//ex2
const idade = pessoas.map(function (obj) {
    delete obj.nome;
    return obj
});

console.log(idade)

//arrow function
const idade2 = pessoas.map(obj => ({ idade: obj.idade }));
console.log(idade2)

//ex3
const chaveId = pessoas.map(function (obj, indice) {
    const newObj = { ...obj }; //Usando a propriedade id estamos modificando o obj original, recomendável fazer um spread, mas apesar disso
    newObj.id = indice + 1; //por padrão altera o obj ou array original
    return newObj;
});
console.log(chaveId);
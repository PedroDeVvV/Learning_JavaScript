//Filter -. Sempre vai retornar um array, com a mesma quantidade de elementos
//ou menos que o array original. 
//Retorne números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 4, 66, 34, 22, 27];
//Sem filter
function maiorQueDez() {
    for (let valor of numeros) {
        if (valor > 10) {
            console.log(valor);
        }
    }
}
maiorQueDez();

//Usando filter - maneira 1
function callbackFilter(valor) {
    return valor > 10;
}

const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados) // retorna um array filtrado 


// //Usando filter - maneira 2
const numerosFiltrados2 = numeros.filter(function callbackFilter(valor) {
    return valor > 10;
});
console.log(numerosFiltrados2) // retorna um array filtrado 

// //Usando filter - maneira 3
const numerosFiltrados3 = numeros.filter((valor) => {
    return valor > 10;
});
console.log(numerosFiltrados3) // retorna um array filtrado 

// //Usando filter - maneira 4 - se houver só um argumento, dá para simplificar mais
const numerosFiltrados4 = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados4)

//Usando filter - maneira 5 - usando as 4 propriedades do filter
const numerosFiltrados5 = numeros.filter((valor, indice, array) => {
    console.log(valor, indice, array)
    return valor > 10;
});
console.log(numerosFiltrados5) // retorna um array filtrado 


//Exemplo 2

//retorne pessoas que tem o nome com 5 letras ou mais
//retorne as pessoas com mais de 50 anos
//retorne as pessoas cujo nome termina com a

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];
//ex1
const pessoasNomeMais5Letras = pessoas.filter(function (obj) {
    return obj.nome.length >= 5;
});

//arrow function
const pessoaNomeMais5Letras = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoaNomeMais5Letras);

//ex2 
const pessoasMais50anos = pessoas.filter(function (obj) {
    return obj.idade > 50;
});

//arrow function
const pessoaMais50anos = pessoas.filter(obj => obj.idade > 50);
console.log(pessoaMais50anos);

//ex3
const nomesTerminamComA = pessoas.filter(function (obj) {
    return obj.nome.toLowerCase().endsWith('a');
});
console.log(nomesTerminamComA);

//arrow function
const nomeTerminamComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(nomeTerminamComA); 
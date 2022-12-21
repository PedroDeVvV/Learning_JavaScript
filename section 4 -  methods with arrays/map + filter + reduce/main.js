//Retorne a soma do dobro de todos os pares
// Filtrar as partes
// Dobrar os valores
// Reduzir(somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 4, 66, 34, 22, 27];

const pares = numeros.filter(function (valor) {
    return valor % 2 === 0;
}).map(function(valor){
    return valor * 2;
}).reduce(function(acumulador, valor){
    return acumulador + valor;
})
console.log(pares);


//arrow function
const pares2 = numeros
.filter(valor => valor % 2 === 0)
.map (valor => valor * 2)
.reduce ((ac, valor) => ac + valor);

console.log(pares2);

// Valor por referência
//                0         1         2
const nomes = ['Pedro', 'Tiago', 'Henrique'] //array literal
//Copiando valor do array(não é interessante passá-lo para outra variavél, pois oq fizer em uma reflete em outra )
//Spread
const novo = [...nomes]; //a partir de agora oq eu fizer aqui não reflete em nomes


//JEITO ERRADO
//const novo = nomes;


//slice
console.log(novo.slice(0, 1));// da posição inicial até onde precisa ser removido
console.log(nomes);
 

//split
const nome = 'Pedro Henrique Silva';
console.log(nome.split(' '));

//join - separa o array de uma forma 'legivél'
const nomes2 = [ 'Pedro', 'Henrique', 'Gonçalves' ];
console.log(nomes2.join(' '));


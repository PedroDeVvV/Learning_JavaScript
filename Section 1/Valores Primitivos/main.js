

//VALORES PRIMITIVOS E POR REFERÊNCIA
/*
Primitivos (imutáveis) - string, number, boolean, undefined, 
null (bigint, symbol) - Valores copiados
Referência (mutável) - array, object, function - Passados por referência
*/

let a = [1, 2, 3];
let b = [...a]; //spread, copia o valor de uma variável

const ad = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const bd = a;

bd.nome = 'João';
console.log(ad);
console.log(bd);
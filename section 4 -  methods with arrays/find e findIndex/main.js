// FIND
//encontra o primeiro item que satisfaz a condição
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array2 = [...array];
const array3 = [...array];

//modo 1
const par = array.find(item => {
    return item % 2 === 0;
})

console.log(par)
//2


//modo 2
const par2 = array2.find(item => item % 2 === 0);
console.log(par2);
//2

//FindIndex
//Basicamente a mesma coisa, mas retorna o indice
const par3 = array3.findIndex(item => item % 2 === 0);
console.log(par3);
//1
//               -5         -4        -3        -2        -1
//                0         1         2          3         4
const nomes = ['Pedro', 'Tiago', 'Henrique', 'Lucas', 'Matheus']
const nomes2 = [...nomes]

//nomes.splice(indice, delete, elem1, elem2, elem3);
const removidos = nomes.splice(4, 1); //remove matheus e guarda em um array

//estamos simulando pop para remover e no caso de adicionar o push
const removido = nomes.splice(3, 2, 'Gustavo', 'Leandro'); //remove Lucas e guarda em um array e adiciona gustavo no indice 3 e leandro no 4

//simulando o shift 
const remover = nomes2.splice(0, 1) //remove pedro e guarda em um array
console.log(remover, nomes2)

//unshift
nomes2.splice(0, 0, 'começo do array')
console.log(nomes2)

console.log(nomes, removido)
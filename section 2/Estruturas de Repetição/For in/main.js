const frutas = ['melancia', 'abacate', 'mamao'];

for (let i in frutas) {
    console.log(frutas);
    // 0 1 2
}


// for (let i =0; i< frutas.length; i++) {
//     console.log(frutas[i])
// }




const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Henrique',
    idade: 18
};

for (let chave in pessoa) { //cria uma váriavel dentro do objeto que percorre os dados, depois no pessoa[chave] ele percorre os dados das chaves
    console.log(chave, pessoa[chave]);
}

//Acessando o mesmo dados de maneiras diferentes.
console.log(pessoa.nome);
console.log(pessoa['nome']);
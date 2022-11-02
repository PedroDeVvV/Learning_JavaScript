
 //ARRAYS (BÁSICO)]
 const alunos = ['Pedro', 'Tiago','Henrique' ]; //ARRAYS SÃO INDEXADOS POR ELEMENTO
                 //  0       1       2


// Alterando nome dentro do array
 alunos[0] = 'Eduardo';
 console.log(alunos);

// adicionando elemento dentro do array
 alunos[3] = 'Luiza';
 console.log(alunos);

// descobrindo tamanho do array
 console.log(alunos.length); //Neste caso o elemento terá 3 elementos, mas seu indice será identificado como 2


 alunos.push('Otavio');// adiciona um item a partir do ultimo elemento do array
 alunos.push('Lucas');

 alunos.unshift('Luiza'); //Adiciona no começo do array

 
 delete alunos[1];// deleta elementos mas não altera os indices


 console.log(alunos instanceof Array);// perguntando se o objeto é um array

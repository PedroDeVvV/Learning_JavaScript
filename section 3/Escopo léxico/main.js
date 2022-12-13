const nome = 'Pedro';

function falaNome() {
  console.log(nome); //retorna Pedro, já que a função consegue buscar a variavel fora que é sua vizinha
}

function usaFalaNome() {
  const nome = 'Luis ';
  falaNome(); 
}
usaFalaNome();//retorna Pedro, pois é o valor da primeira função chamada, e essa função não retorna o nome 'Luís'


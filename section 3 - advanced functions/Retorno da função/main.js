function soma(a, b) { //parametros
    return console.log(a + b);
}

soma(1,2);//argumentos

//função dentro de função
function criaMultiplicador(multiplicador) {
    // multiplicador
    return function(n) {
      return n * multiplicador;
    };
  }
  
  const duplica = criaMultiplicador(2);
  const triplica = criaMultiplicador(3);
  const quadriplica = criaMultiplicador(4);
  
  console.log(duplica(3)); //informa o n; a função duplica recebe a função de dentro da criaMultiplicador sem ser executado
  console.log(triplica(2));
  console.log(quadriplica(10));
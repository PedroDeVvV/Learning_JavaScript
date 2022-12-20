//declarar função sem argumento, porém usando a palavra function, o js armazena isso na 'variaveç' arguments, podendo ser usado posteriormente
//ela armazena todos os argumentos enviados

function funcao() {
    console.log(arguments[3]);
}

funcao('valor', 1, 2, 8, 4, 5);

//Usando for
function funcao1() {
let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}

funcao1('valor', 1, 2, 8, 4, 5);

//usando parametros
function funcao2(a, b, c) { 
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total, a, b, c); //armazena 3 valores, no caso os 3 primeiros e o total/restante permanece no arguments
    // 20, 1, 2, 8
}

funcao2(1, 2, 8, 4, 5);


//paramêtros sem valores definidps
function funcao2(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
    //
}

funcao2(1, 2, 8, 4);
//retorna 1,2,3,4 undefined, undefined pois a variavel existe, só não tem valor já que não enviei todos os parametros

//Setando um valor padrão para variavel
function funcao3(a, b) {
    b = b || 3;
    console.log(a + b);
}
funcao3(1); // retorna 4 

//ou

function funcao4(a, b = 2, c = 3) {// se b e c não receberem valores, iram usar os valores definidos no começo
    console.log(a + b + c) ;

}
funcao4(1); // retorna 6
funcao4(1, undefined, 4); // retorna 7, b assume o valor padrão

//Atribuição via desestruturação obj
function func({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
let obj = ({nome:'Pedro', sobrenome:'Henrique', idade:18})//enviando um objeto literal
func(obj)

//Atribuição via desestruturação array
function func2([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
let array = (['Pedro', 'Henrique', 18]);
func2(array);

//função de conta
function conta(operador, acumulador, ...numeros) { //...rest operator, guarda os valores em um array, sempre deve ser o ultimo operador 
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
}

conta('+', 10, 20, 30, 40, 50)//retorna 150
conta('-', 200, 20, 30, 40, 50)//retorna 60
conta('*', 10, 20, 30, 40, 50)//retorna 12000000
conta('/', 10, 20, 30, 40, 50)//retorna 0.0000083333....



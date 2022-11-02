
//MANIPULANDO STRINGS
let nome = "booa noite"

console.log(nome.charAt(7));
console.log(nome.length); //tamanho dos caracteres
console.log(nome.replace(/booa/, 'GOOD')); //substitui um caracter
console.log(nome.slice(2, 9)); //mostra da onde começa e onde termina
console.log(nome.split(' ')); //corta o catacter desejado
console.log(nome.toUpperCase()); //tudo maiusculo
console.log(nome.toLowerCase()); //tudo minusculo


//MANIPULANDO NUMBERS

//IEEE 754-2008 - PADRÃO DO JS
let num1 = 0.7; number
let num2 = 0.1; number

console.log(num1.toString() + num2);
num1 = num1.toString();// alterando o valor da variável para string
console.log(typeof num1);// exibe o tipo da variável, seja string, number, bool...
console.log(num1.toFixed(2)); //mostra quantas casas decimais eu quero exibir depois do 'ponto', no caso duas.
console.log(Number.isInteger(num1));// retorna se o número é inteiro ou não, porém na forma booleana.
let temp = num1 * 5;
console.log(Number.isNaN(temp));// retorna verdadeiro sempre que a conta for inválida.
console.log(temp);

num1 += num2; num1 = num1 + num2
num1 += num2; 0.9
num1 += num2; 1.0

num1 = parseFloat(num1.toFixed(2)); //converte para float mostrando só a primeira casa decimal.

console.log(num1);

num1 = ((num1 * 100) + (num2 * 100)) / 100;
console.log(num1)
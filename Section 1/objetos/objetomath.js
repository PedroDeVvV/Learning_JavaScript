//OBJETO MATH
let num1 = 9.4687;

let num2 = Math.floor(num1); //arredonda o valor para BAIXO
let num3 = Math.ceil(num1);// arredonda o valor para CIMA
let num4 = Math.round(num1); //arredonda para o valor mais próximo

console.log(Math.max(1,2,3,4,5,6,3727432,23801,1921,-0999,998717)); //Pega o maior número da sequência
console.log(Math.min(1,2,3,4,5,6,3727432,23801,1921,-0999,998717));// Pega o menor número da sequência
console.log(Math.random());// gera um número aléatorio entre 0 e 1, porém o 1 não é incluído
console.log(Math.pow(10, 6));// potenciação, ** RESOLVERIA  
console.log(num1 * 0.5);// ou console.log(num1 * (1/2));
const aleatorio = Math.round(Math.random() * (10 - 5) + 5); //número aléatorio entre 10 e 5
console.log(aleatorio);
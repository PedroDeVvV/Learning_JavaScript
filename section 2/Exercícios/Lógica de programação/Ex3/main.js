//Escrever função que recebe um número
//Divisivél por 3 = Fizz
//Divisiveel por 5 = Buzz
//Divisivel por 3 e 5 = FizzBuzz
//Não é divisivel por 3 e 5 retorna o próprio número
//Checar se o número é realmente um número = retorna o próprio número


function recebeNumber(num) {
    if (!Number(num)) return console.log(`Isso não é um número: ${num}`);

    if (num % 5 == 0 && num % 3 == 0) return console.log('FizzBuzz');
    if (num % 3 == 0) return console.log('Fizz');
    if (num % 5 == 0) return console.log('Buzz');

    return console.log(`${num} não é divísivel por 3 ou 5`);
}

recebeNumber(1)

// //SOLUÇÃO DO PROFESSOR
function fizzBuzz(n) {
    if (typeof n !== 'number') return NaN;
    if (n % 3 === 0 && n % 5 === 0) return '3 e 5 FizzBuzz';
    if (n % 3 === 0) return '3 Fizz';
    if (n % 5 === 0) return '5 Buzz';
    return n;
  }
  
  for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
  }
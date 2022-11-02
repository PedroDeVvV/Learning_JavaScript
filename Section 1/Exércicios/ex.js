// Exercicio 1
// console.log('Meu nome é "Pedro". Estou aprendendo JavaScript ás ', 19 ,' da noite');
// console.log('Este é um ',1092,' número');




//  Exercicio 2
// Pedro Henrique tem 18 anos, 1.72 de altura e 70kg.
// const nome = 'Pedro';
// const sobrenome = 'Henrique';
// const idade = '18';
// const altura = '1.72';
// const peso = '70';
// let imc = peso / (altura * altura);
// let anoNascimento = 2022 - idade;
// console.log( `${nome} ${sobrenome} tem ${idade} anos ${altura} M de altura e ${peso} kg. Seu Indíce de massa corporal é igual á ${imc} e seu ano de nascimento foi em ${anoNascimento}.`);




//EXERCICIO 3 PROMPT

// let num1 = prompt('Digite um número');
// let num2 = prompt('Digite outro número');

// num1 = Number(num1);
// num2 = Number(num2);

// const num3 = num1 + num2;

// if (num3 >= 100) {
//     alert('Número maior que 100')
// }

// else {
//     alert('Número menor que 100')
// }





//EXERCICIO 4 MUDANDO VALOR DE VARIAVÉIS

// let varA = 'A';          //B;
// let varB = 'B';         //C;
// let varC = 'C';        //A


// [varA, varB, varC] = [varB, varC, varA]  //ATRIBUI UMA MUDANÇA NO VALOR DAS VARIAVEIS, CASO NÃO SEJAM CONSTANTES

// console.log(varA, varB, varC);






//EXERCICIO 5 MANIPULANDO STRINGS
// const nome = prompt('Digite o seu nome completo');
// document.body.innerHTML += `O seu nome <strong>${nome}</strong> <br />`;
// document.body.innerHTML += `O seu nome tem <strong>${nome.length}</strong> letras <br />`;
// document.body.innerHTML += `A segunda letra do seu nome é  <strong>"${nome[1]}"</strong> <br />`;
// document.body.innerHTML += `O primeiro indice da letra A no seu nome é <strong>${nome.indexOf('a')}</strong> <br />`;
// document.body.innerHTML += `O ultimo indice da letra no seu nome é <strong>${nome.lastIndexOf('a')}</strong> <br />`;
// document.body.innerHTML += `As ultimas 3 letras do seu nome são: <strong>${nome.slice(-3, nome.length)}</strong> <br />`; //tamanho da string menos 3
// document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(' ')}</strong> <br />`;
// document.body.innerHTML += `Seu nome com letras maíusculas <strong>${nome.toUpperCase()}</strong> <br />`;
// document.body.innerHTML += `Seu nome com letras minusculas <strong>${nome.toLowerCase()}</strong> <br />`;




//EXERCICIO 6 MANIPULANDO NUMBERS E OBJETO MATH

let numero = prompt('Digite um número');
numero = parseFloat(numero);

let numTitulo = document.getElementById('numero-titulo');
numTitulo.innerHTML = numero; 

//raiz quadrada

raizQuadrada = document.getElementById('raiz-quadrada');
raizQuadrada.innerHTML = numero ** 0.5;

//numero inteiro

// numInteiro = document.getElementById('inteiro2');
// numInteiro.innerHTML = Number.isInteger('numero');

// let A = document.getElementById('numero_inteiro');
// A.innerHTML = numero; 

// //É UM NAN?
// let notAnumber = document.getElementById('nan');
// notAnumber.innerHTML = Number.isNaN(numero);

// //ARREDONDADO PARA BAIXO
// let arredondadoParaBaixo = document.getElementById('arredondadoBaixo');
// arredondadoParaBaixo.innerHTML = Math.floor(numero);

// //ARREDONDADO PARA CIMA
// let arredondadoParaCima = document.getElementById('arredondadoCima');
// arredondadoParaCima.innerHTML = Math.ceil(numero);

// //COM DUAS CASAS DECIMAIS
// let duasCasas = document.getElementById('duasCasasDecimais');
// duasCasas.innerHTML = numero.toFixed(2);

//MANEIRA MAIS SIMPLES
// const numero = Number(prompt('Digite um número:'));
// const numeroTitulo = document.getElementById('numero-titulo');
// const texto = document.getElementById('texto');

// numeroTitulo.innerHTML = numero;

// texto.innerHTML = '';
// texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}.</p>`;
// texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
// texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
// texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}.</p>`;
// texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}.</p>`;
// texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;


 
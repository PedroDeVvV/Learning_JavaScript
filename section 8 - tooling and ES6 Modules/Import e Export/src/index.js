import { nome as nome2, sobrenome, idade2, soma, Pessoa } from './modulo1';
//renomeando na importação para não colidirem
const nome = "Henrique";

console.log(nome2, sobrenome, idade2);
console.log(soma(5, 5))

import { jogo, jogo2 } from './modulo1';
console.log(jogo, ' e ', jogo2)

const p1 = new Pessoa('Pedro', 'Henrique')
console.log(p1);

import * as MeuModulo from './modulo1'; //--> importar tudo
console.log(MeuModulo)

import qualquerNome from './modulo1'; //-> o padrão é a função soma2
console.log(qualquerNome(2, 3));
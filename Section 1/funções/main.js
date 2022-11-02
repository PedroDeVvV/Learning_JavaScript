
//FUNÇÕES (BÁSICO) - executam ações
function saudacao(nome) {
    return `Bom dia, ${nome}!`;
 }

 const variavel = saudacao('Pedro');
 console.log(variavel);

 function soma(x, y) {     const resultado = x + y;
    return resultado;
 }

 console.log(soma(2, 87));
 console.log(soma(2, 4));
 console.log(soma(7, 8));

const raiz = function (n) {
    return n ** 0.5;
}; //já que é uma variavel apontando uma função é necessário o ponto e vírgula. 

console.log(raiz(9));
console.log(raiz(43));
console.log(raiz(3342));

//ARROW FUNCTION
const raiz2 = n =>  n ** 0.5;  //ARROW FUNCTION 
    
console.log(raiz2(9));
console.log(raiz2(43));
console.log(raiz2(3342));

//EXERCÍCIO ARRAY, FUNCTION E OBJECT
function meuEscopo() {
    const form = document.querySelector('.form'); //pega a class do formulário
    const resultado = document.querySelector('.resultado'); //pega a class do resultado que está no html
    const pessoas = [];

    function recebeEventoForm(evento) { //função
        evento.preventDefault(); //não deixa atualizar

        const nome = form.querySelector('.nome'); //class no html
        const sobrenome = form.querySelector('.sobrenome'); //class no html
        const peso = form.querySelector('.peso'); //class no html
        const altura = form.querySelector('.altura'); //class no html

        const objetoPessoas = { //objeto
            nome: nome.value, //nome.valor
            sobrenome: sobrenome.value, //sobrenome.valor
            peso: peso.value, //peso.valor
            altura: altura.value, //altura.valor
        };
        pessoas.push({objetoPessoas}) //colocando objeto dentro do array
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} tem ${peso.value}kg e mede ${altura.value}.</p>`;  //.valor que está mandando o texto para a div resultado do html
        console.log(pessoas)  //exibe os arrays no console do navegador
    }


    form.addEventListener('submit', recebeEventoForm); //pega o evento de carregamento

}
meuEscopo(); //usado para deixar o escopo global limpo, portanto as funções deixam o código mais organizado
//Hoisting: JavaScript possui este elemento que permite colocar funções em qualquer parte do código e chamá-las normalmente.

document.createElement('p')// cria um paragrafo
p.classList.add('paragrafo-resultado') //adiciona uma classe ao paragrafo criado
p.innerHTML = 'Qualquer coisa';
resultado.appendChild(p); //insere o elemento p na div  
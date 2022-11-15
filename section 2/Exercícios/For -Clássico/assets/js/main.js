//Primeira Maneira: Criar objetos dentro de um array, selecionar o container(onde quero exibir a mensagem), criar uma div no js,
//percorrer o array com o for e enquanto ele percorrer irá fazer uma desestruturação de objetos apontando ao indice dos elementos, criar elementos de acordo com a posição da tag,
//(footer, div , p) e com base nisso adicionar o texto correspondente  e adicionar os textos dentro da div criada.
//e não podemos esquecer de adicionar ao container principal a div que foi criada (correto usar uma função englobando tudo).

const elementos = [
  { tag: 'p', texto: 'Bom dia' },
  { tag: 'div', texto: 'Boa terça-feira' },
  { tag: 'section', texto: 'Boa tarde' },
  { tag: 'footer', texto: 'Boa noite' },
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  let tagCriada = document.createElement(tag);
  tagCriada.innerText = texto; //já que o campo só tem texto, seria seguro usa innerText
  div.appendChild(tagCriada);
}

container.appendChild(div);



// for (let i = 1; i<= 4; i++) {
//   const newDiv = document.createElement('div');
//   newDiv.innerHTML = `${i} - Frase`;
//   document.body.appendChild(newDiv);
// }
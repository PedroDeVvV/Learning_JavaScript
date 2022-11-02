//   const tresHoras = 60 * 60 * 3 * 1000;
//   const data = new Date(0 + tresHoras);  01011970 Timestamp ou época unix = data 0
//   console.log(data.toString());

//   const data = new Date(2019, 3, 20, 15, 14, 27);
//  console.log(data.toString());

//   const data = new Date('2004-07-19 10:10:18'); formato dataString  os meses também começam do 0
//   ANO, MÊS, DIA, HORS, MINUTO, SEGUNDO ,MS.
//   console.log()
//   console.log(data.toString());


const data2 = new Date('2004-07-19 10:10:18');
console.log('Dia', data1.getDate());// OBTER NÚMERO DO DIA
console.log('Mês', data1.getMonth() + 1); //Número do mÊs (começa do zero)
console.log('Ano', data1.getFullYear());// Número do ano
console.log('Hora', data1.getHours()); //hora
console.log('Min', data1.getMinutes());// minutos
console.log('Seg', data1.getSeconds());  //segundos
console.log('ms', data1.getMilliseconds()); // milissegundos
console.log('Dia semana', data1.getDay());  //número do dia na semana 0 - Domingo, 6 -Sábado
console.log(Date.now());









//Função para formatar a data;
function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`; //operação ternária
}

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  return `${dia}${mes}${ano} ${hora}:${min}:${seg}`;
}

const data1 = new Date();
const dataBrasil = formataData(data1);
console.log(dataBrasil);

const data = new Date();
data.setFullYear(2004);
console.log(data.toJSON);
 //ano passará a ser 2004
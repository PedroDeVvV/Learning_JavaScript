// const data = new Date();
// let dia = data.getDay();
// let mes = data.getMonth();
// let ano = data.getFullYear();
// let horas = data.getHours();
// let minutos = data.getMinutes();
// let diaSemanaTexto;
// let mesTexto;

// switch (dia) {
//     case 0:
//         diaSemanaTexto = 'Domingo';
//         break;
//     case 1:
//         diaSemanaTexto = 'Segunda-feira';
//         break;
//     case 2:
//         diaSemanaTexto = 'Terça-feira';
//         break;
//     case 3:
//         diaSemanaTexto = 'Quarta-feira';
//         break;
//     case 4:
//         diaSemanaTexto = 'Quinta-feira';
//         break;
//     case 5:
//         diaSemanaTexto = 'Sexta-feira';
//         break;
//     case 6:
//         diaSemanaTexto = 'Sábado';
//         break;
//     default:
//         diaSemanaTexto = 'Dia da semana não encontrado';
// }
 
// switch (mes) {
//     case 0:
//         mesTexto = 'Janeiro';
//         break;
//     case 1:
//         mesTexto = 'Fevereiro';
//         break;
//     case 2:
//         mesTexto = 'Março';
//         break;
//     case 3:
//         mesTexto = 'Abril';
//         break;
//     case 4:
//         mesTexto = 'Maio';
//         break;
//     case 5:
//         mesTexto = 'Junho';
//         break;
//     case 6:
//         mesTexto = 'Julho';
//         break;
//     case 7:
//         mesTexto = 'Agosto';
//         break;
//     case 8:
//         mesTexto = 'Setembro';
//         break;
//     case 9:
//         mesTexto = 'Outubro';
//         break;
//     case 10:
//         mesTexto = 'Novembro';
//         break;
//     case 11:
//         mesTexto = 'Dezembro';
//         break;
//     default:
//         mesTexto = 'Mês não encontrado';
// }


// const texto = document.querySelector('.container h1');
// texto.innerHTML = `${diaSemanaTexto}, ${mes} de ${mesTexto} de ${ano} ${horas}:${minutos}`; 
 

//SIMPLESMENTE FAZER

const h1 = document.querySelector('.container h1');
const data = new Date();

h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });
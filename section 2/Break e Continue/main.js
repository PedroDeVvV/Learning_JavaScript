// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9,]

// for (let n of numeros) {
//     if (n === 5) {
//         console.log('sai do laço')
//         break; //irá parar o processo ao encontrar o 2
//     }
//     console.log(n);
// }


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9,]

for (let i in numeros) {
    let numero = numeros[i];
    if (numero === 2) {
        console.log('Pulei o número 2')
        continue; //irá pular o 2
    }

    console.log(numero);

    if (numero === 8) {
        console.log('sai do laço');
        break;
    } 
}
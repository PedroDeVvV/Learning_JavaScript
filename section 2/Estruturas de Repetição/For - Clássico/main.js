 // i - index

for (let i = 0; i <= 10; i++ ) {
    console.log('Bom dia', i);
}


for (let i = -10; i <= 100; i+= 10 ) {
    console.log('Bom dia', i);
}

for (let i = 500; i > 10; i-- ) {
    console.log(`Bom dia, ${i}`);
}

//          EXEMPLO DE USO
for (let i = 0; i <= 10; i++ ) {
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);
}


//                 0       1       3
const frutas = ['Maça', 'Pera' ,'Uva', 'Manga', 'Abacate', 'Melão', 'Mamão', 'Kiwi', 'Abacaxi', 'Banana', 'Laranja', 'Mexerica']

for (let i = 0; i < frutas.length; i++ ) {
    console.log(`Índice ${i}`, frutas[i]);
}
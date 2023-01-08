function rand(min, max) {  //função para gerar tempo aleatorio
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('Aceitamos apenas strings');
        setTimeout(() => {
            resolve(msg); //só posso mandar um parametro aqui
        }, tempo);
    });    
}
//promises funcionam em paralelo

esperaAi('frase 1', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Frase 2', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(2222, rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    }).then(() => {
        console.log('Serei o ultimo a ser exibido')
    })
    .catch(e => {
        console.log('erro:', e);
    });

console.log('Isso será exibido antes de qualquer promises')

//Exemplo 2

let soma = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
        resolve('Sucess');
    } else {
        reject('Failed');
    }
})

soma.then((msg) => {
    console.log('Correto')
})
    .catch((err) => {
        console.log('Incorreto', err)
    })

//Tranformando uma função existente em uma promisse


const betterConsole = 'Playstation'


function whoIsTheBetterConsole() {

   return new Promise((resolve, reject) => { //basta englobar uma promisse dentro dos executaveis da função
        if (betterConsole != 'Playstation') {
            reject('Console incorreto')
        } else {
            resolve('Corretissímo');
        }
    })
}

whoIsTheBetterConsole()
    .then((resultado) => {
        console.log(resultado)
    })
    .catch((err) => {
        console.log('ERRO', err)
    })
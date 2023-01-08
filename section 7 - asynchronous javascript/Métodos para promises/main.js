function rand(min, max) {  //função para gerar tempo aleatorio
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('Cai no erro'); //se cair no erro, somente isso será executado
            return;//
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' Passei pela promisse'); //só posso mandar um parametro aqui
            return;
        }, tempo);
    });
}

//Promise.all Promise.race //Promise.resolve //Promise.reject

const promessas = [
    'First value',
    esperaAi('Promisse 1', 3000),
    esperaAi('Promisse 2', 700),
    esperaAi('Promisse 3', 1000),
    // esperaAi(1000, 38), //simulando erro
    'Outro valor',
];

Promise.all(promessas).then(function (valor) {
    console.log(valor);
})
    .catch(function (erro) {
        console.log(erro);
    })

//race --> retorna a primeira promessa resolvida
const promessas2 = [
    esperaAi('Promisse 1', rand(1, 5)),
    esperaAi('Promisse 2', rand(1, 5)),
    esperaAi('Promisse 3', rand(1, 5)),
];

Promise.race(promessas2).then(function (valor) {
    console.log(valor);
})
    .catch(function (erro) {
        console.log(erro);
    })


//Promise.resolve e Promise.reject
function baixaPagina() {
    const emCache = false;

    if (emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('ERRO', e));
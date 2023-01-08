function rand(min = 0, max = 3) {  //função para gerar tempo aleatorio
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('Cai no erro'); //se cair no erro, somente isso será executado
                return;//
            }
            resolve(msg.toUpperCase() + ' Passei pela promisse'); //só posso mandar um parametro aqui
            return;
        }, tempo);
    });
}

//encadeando as promisses

esperaAi('Fase 1', rand()).then((valor) => {
    console.log(valor);
    return esperaAi('Fase 2', rand());
})
    .then(fase => {
        console.log(fase);
        return esperaAi('Fase 3', rand());
    })
    .then(fase => {
        console.log(fase);
        return fase; //aqui retornado a ultima fase que é usada como argumento para informar a ultima
    }).then(fase => {
        console.log('Terminamos na fase: ', fase)
    })
    .catch((err) => {
        console.log(erro, err)
    })

//Usando ASYNC e AWAIT

async function executa() {
    try {
        const fase1 = await esperaAi('Fase 1', rand());
        console.log(fase1);

        const fase2 = await esperaAi('Fase 2', rand());
        console.log(fase2);

        const fase3 = await esperaAi('Fase 3', rand());
        console.log(fase3);

        console.log('Terminamos na fase: ', fase3)
    }
    catch (e) {
        console.log(erro, e)
    }
}

executa()

//Pendente -> Promisse pending está sendo executada quando foi requisitada.
//Fullfiled -> resolvida
//Reject -> rejeitada
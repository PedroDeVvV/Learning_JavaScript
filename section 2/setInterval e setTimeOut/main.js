function mostraHora() {
    let data = new Date();


    return data.toLocaleTimeString('pt-br', {
        hour12:false,
    });
}

const timer = setInterval(function () { //intervalo em que a função é executada
    console.log(mostraHora());
}, 1000)


setTimeout(function () { //para a execução
    clearInterval(timer)
}, 10000)


setTimeout(function () { //insere um item na execução
    console.log('Já se passaram 3 segundos')
}, 3000)
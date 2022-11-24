try {
    console.log(naoExisto);
} catch(err) { //err exibe o erro, mas nunca devemos exibí-lo ao usuário final
    let naoExisto = 'cai no catch';
    console.log(naoExisto);
}


//throw

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw ('x e y precisam ser números');
    }

    return x + y;

}
try {
    console.log(soma('44d4', 2));
} catch (error) {
    // console.log(error)
    console.log('Algo mais amgavél ao user');
}
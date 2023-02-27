//Verifica se pelo menos um item satisfaz a condição estabelecida

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'teste'];

const peloMenosUmItemNaoENumero = array.some(item => {
    return typeof item !== 'number';
})

console.log(peloMenosUmItemNaoENumero)
//true
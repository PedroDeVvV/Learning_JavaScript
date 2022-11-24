//Escreva uma função que receba 2 números e retorne o maior deles

const n1 = 22;
const n2 = 10;

function maiorNumber (n1, n2) {
    if (n1 > n2) {
       console.log(`${n1} é o maior número`)
    }
    else if (n2 > n1) {
       console.log(`${n2} é o maior número`)
    }
    else {
       console.log(`Os números são iguais, ambos são ${n1}`)
    }
}

maiorNumber(n1, n2)


//SIMPLIFICANDO...
function max(x, y) {
    return x > y ? x : y;
}

console.log(max(10,2));


//ARROW FUNCTION

const max2 = (x, y) => {
    return x > y ? x :y;
};

console.log(max2(10,2));

//SIMPLIFICANDO MAIS...
const max3 = (x, y) => x > y ? x :y;
console.log(max3(10,233));

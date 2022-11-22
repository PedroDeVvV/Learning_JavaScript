//Escreva uma função chamada ePaisagem que recebe dois argumenros,
//largura e altura de uma imagem(number).
//Retorne true se a imaem estiver no modo paisagem

// FIRST MODE
const lar = 200;
const alt = 100;

function ePaisagem(lar, alt) {
    if (lar > alt) {
        console.log(true);
    } else {
        console.log(false);
    }
}

ePaisagem(lar, alt);



//Operador ternário

function ePaisagem(largura, altura) {
    return largura > altura ? true : false;
} 
console.log(ePaisagem(1920, 1080));


// //SIMPLIFICANDO...
function ePaisagem(largura, altura) {
    return largura > altura;
} 
console.log(ePaisagem(1920, 1080));


//ARROW FUNCTION
const ePaisagem = (largura, altura) => largura > altura;
console.log(ePaisagem(1920, 1080));
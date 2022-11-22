// let paragrafos = document.querySelector('.paragrafos');
let ps = document.querySelectorAll('p');

let estilosBody = getComputedStyle(document.body); //pegando os estilos computados 
let backgroundColorBody = estilosBody.backgroundColor; //passando pra outra variável e especificando qual elemento eu quero

for (let p of ps) {
    p.style.background = backgroundColorBody; //nome dos elementos do css no js passam a ter camelcase
    p.style.color = 'white';
    p.style.textShadow = '2px 2px red';
    p.style.transition = '1s';
}
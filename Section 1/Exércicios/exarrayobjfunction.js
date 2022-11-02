function meuEscopo() {
    const form = document.querySelector('.form'); //pega a class do formulário
    const resultado = document.querySelector('.resultado'); //pega a class do resultado que está no html
    const pessoas = [];

    function recebeEventoForm(evento) { //função
        evento.preventDefault(); //não deixa atualizar

        const nome = form.querySelector('.nome'); //class no html
        const sobrenome = form.querySelector('.sobrenome'); //class no html
        const peso = form.querySelector('.peso'); //class no html
        const altura = form.querySelector('.altura'); //class no html

        const objetoPessoas = { //objeto
            nome: nome.value, //nome.valor
            sobrenome: sobrenome.value, //sobrenome.valor
            peso: peso.value, //peso.valor
            altura: altura.value, //altura.valor
        };
        pessoas.push({objetoPessoas}) //colocando objeto dentro do array
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} tem ${peso.value}kg e mede ${altura.value}.</p>`;  //.valor que está mandando o texto para a div resultado do html
        console.log(pessoas)  //exibe os arrays no console do navegador
    }


    form.addEventListener('submit', recebeEventoForm); //pega o evento de carregamento

}
meuEscopo(); //usado para deixar o escopo global limpo, portanto as funções deixam o código mais organizado




    //     form.onsubmit = function (evento) { //captura evento de load do formulário
    //         evento.preventDefault(); //não deixa atualizar
    //         alert(1); //executado quando o form é enviado
    //         console.log('foi enviado');
    //     };

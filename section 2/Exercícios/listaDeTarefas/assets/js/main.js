const inputTarefas = document.querySelector('.input-tarefas');
const btnTarefas = document.querySelector('.btn-add');
const tarefas = document.querySelector('.tarefas');

inputTarefas.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) { //se a tecla cod 13 for clicada (ENTER)
        criaTarefa(inputTarefas.value);
    }
});

function limpaInput() {
    inputTarefas.value = '';
    inputTarefas.focus(); //Depois de ser limpado, o input recebe o foco novamente no seu inicio
}

function criaBotaoApagar(li) {
    li.innerText += ' '; // da um espaço no LI entre o button
    const botaoApagar = document.createElement('button'); // cria botao
    botaoApagar.innerText = 'Apagar'; // insere o texto
    botaoApagar.setAttribute('class', 'apagar') //seta uma classe para ele
    li.appendChild(botaoApagar); //adiciona-o no li
}

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function criaTarefa(textoInput) { //recebe o inputTarefas.value
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li); //adicionando li a class tarefas ul
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

btnTarefas.addEventListener('click', function (e) {
    if (!inputTarefas.value == "") {
        criaTarefa(inputTarefas.value);
    } else {
        alert('Informe a tarefa desejada!');
    }
});

document.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('apagar')) {  //se a variavel el contém a classe apagar...
        el.parentElement.remove(); //parentElement faz referencia ao pai do botâo, que é o LI
        salvarTarefas();
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');//seleciona todos os li
    const listaDeTarefas = [];//cria um array vazio

    for (let tarefa of liTarefas) { //vai pegar o valor de cada li e jogar na variavel
        let tarefaTexto = tarefa.innerText; //joga o texto e, uma variavel
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim; //tira a palavra apagar e o trim remove o espaço entre caracteres
        listaDeTarefas.push(tarefaTexto);//coloca o texto no final do array
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); //converte para json, um formato de texto
    localStorage.setItem('tarefas', tarefasJSON);//salvando tarefas com o valor de tarefasjson e salvando no navegador, só é possivel salvar string, por isso a conversão para json
}

function adicionaTarefasSalvas() {  //joga as tarefas novamente na ul
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas); //converte para array novamente

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas()
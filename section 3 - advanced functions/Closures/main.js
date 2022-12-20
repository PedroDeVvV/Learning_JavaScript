// // Global
function retornaFuncao(nome) {
    return function () {
        return nome; //uma closure lhe dá acesso ao escopo de uma função externa a partir de uma função interna
    };            //como ocorre neste exemplo. A função filho possui uma referência ao escopo da função pai, 
    //e a essa referência nós damos o nome de closure.
}

const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('João');

console.log(funcao()); //retorna Luiz
console.log(funcao2()); //retorna João
 //Closure significa que é uma função de fechamento de escopo
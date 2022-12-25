/*
Object.values (retorna o valor das propriedadas) 
Object.entries (retorna tanto as keys como os values)
Object.getOwnPropertyDescriptor(o, 'prop') (retorna como a propriedade está definida, writable, configurable, value e enumerable)
Object.assign(des, any) (faz a msm coisa que spread)
... (spread)
// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/


const produto = { nome: 'Caneca', preco: '1.80' };
const outraCoisa = { ...produto, material: 'Porcelana' }; //spread e adição de um atributo //Object.assign faz a mesma coisa
outraCoisa.nome = 'Pedro';
outraCoisa.preco = 50;

console.log(produto);//original
console.log(outraCoisa);//modificado a partir do original

Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
});

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))// por padrao vem true, fiz a alteração acima

console.log(Object.values(produto)); //retorna o valor das propriedadas
console.log(Object.entries(produto)); //retorna tanto as keys como os values

//Fazendo uma iteração com for

for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}

//ou

for (let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1]);
}
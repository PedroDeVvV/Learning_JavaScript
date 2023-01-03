const pessoas = [
    { id: 3, nome: 'Pedro' },
    { id: 2, nome: 'Maria' },
    { id: 1, nome: 'Leana' }
];

const novasPessoas = new Map();  //mantém a estrutura de dados na sequencia 321, sem isso seria 123.
for (const pessoa of pessoas) {
   const {id} = pessoa;
   novasPessoas.set(id, {...pessoa});
}

console.log(novasPessoas)
console.log(novasPessoas.get(2))

// Maneira 1 
const a1 = [1, 2, 3];
const a2 = [4, 5, 6]
const a3 = a1.concat(a2);

console.log(a3)

//Maneira 2
const a4 = [...a1, ...a2] //usando ...spread (espalhar)
console.log(a4)
//Vai retornar um booleano
//every - todos

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const allItensAreNumbers = array.every((item) => typeof item === "number");

console.log(allItensAreNumbers);
//true

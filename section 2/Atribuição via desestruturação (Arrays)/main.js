//                 0    1   2    3    4    5    6    7    8
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900,];
const [um, , três, , cinco, , sete,] = numeros; // a primeira variavél deste novo array terá o valor da primeira variavel do array números
//para criar a variavél de resto, basta usar reticencias e inserir o nome, assim como
//acima '...resto' 
// '...spread' no sentido de espalhar
//'...rest' armazenar o resto de algo

console.log(um, três, cinco, sete);
//console.log(resto);


//                  0          1         2         //indexação dos três arrays
//              0  1  2    0  1  2    0  1  2  //indexação dentro de cada array
const nums = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]  ];
console.log(nums[1] [2]) //me retorná o número 6.


const nums2 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]  ];
const [,[,,seis]] = nums2; //pulou primeiro array, pulou duas casas do segundo, e pegou o
console.log(seis);  //me retorna 6 



const nums3 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]  ];
const [,[,cinc],[,,nove]] = nums2; //pulou primeiro array, pulou uma do segundo, e pelou duas casa no terceiro, pegando o 9.
console.log(cinc, nove);  //me retorna 5 e 9;


const lista = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]  ];
const [lista1, lista2, lista3] = lista;
console.log(lista2, lista3[2]);
//retornará [4, 5, 6] 9
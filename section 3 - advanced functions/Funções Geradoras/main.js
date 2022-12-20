//cada vez que for chamada ele executará um valor na ordem que foi descrito
function* geradoraOne() {
    //Código comum...
    yield 'valor 1';
    //Código comum...
    yield 'valor 2';
    //Código comum..
    yield 'valor 3';
}

const g1 = geradoraOne();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next());

for (let valor of g1) {
    console.log(valor)
}


//EXEMPLO 2 - uma geradora faz parte do serviço para outra
function* geradora2() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora3() {
    yield* geradora2();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora3();
for (let valor of g4) {
    console.log(valor);
}

//EXEMPLO 3 - funções sendo executadas em ordens respectivas

function* geradora5() {
    yield function () {
        console.log('Vim do y1');
    };

    return function () { //nada será executado depois do return
        console.log('Vim do return');
    };

    yield function () {
        console.log('Vim do y3');
    };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();
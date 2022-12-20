//Uma função que se chama novamente
//limite de aproximadamente 1000 recursividades
function recursiva(num) {
    console.log(num);
    if (num >= 10) return;
    num++;
    recursiva(num);
}

recursiva(2)
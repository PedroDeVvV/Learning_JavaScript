// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237
11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284
11 - (284 % 11) = 2 (segundo dígito)
Se o número digito for maior que 9, consideramos 0.
*/

function validaCpf(valor) {
    let cpf = valor;
    if (cpf > 11) return console.log('Tamanho inválido')
    let cpfLimpo = cpf.replace(/\D+/g, '');
    cpfArray = Array.from(cpfLimpo);

    const soma = cpfArray[0] * 10 + cpfArray[1] * 9 + cpfArray[2] * 8 + cpfArray[3] * 7 + cpfArray[4] * 6 +
        cpfArray[5] * 5 + cpfArray[6] * 4 + cpfArray[7] * 3 + cpfArray[8] * 2;

    let firstNumber = 11 - (soma % 11);

    if (firstNumber > 9) return firstNumber = 0;

    firstNumber = firstNumber.toString();
    const cpf2 = [...cpfArray, ...firstNumber]

    const soma2 = cpf2[0] * 11 + cpf2[1] * 10 + cpf2[2] * 9 + cpf2[3] * 8 + cpf2[4] * 7 +
        cpf2[5] * 6 + cpf2[6] * 5 + cpf2[7] * 4 + cpf2[8] * 3 + cpf2[9] * 2;

    let secondNumber = 11 - (soma2 % 11);

    if (secondNumber > 9) return secondNumber = 0;

    if (firstNumber == cpfLimpo[9] && secondNumber == cpfLimpo[10]) {
        console.log(`O CPF ${cpf} é válido`)
    } else {
        console.log(`O CPF ${cpf} é inválido`)
    }
}

validaCpf('572.531.988-16')

//Resolução do Professor

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);

    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
};

ValidaCPF.prototype.isSequencia = function () {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
};

const cpf = new ValidaCPF('070.987.720-03');

if (cpf.valida()) {
    console.log('Cpf válido');
} else {
    console.log('Cpf inválido');
}
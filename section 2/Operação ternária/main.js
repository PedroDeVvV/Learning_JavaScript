// OPERADOR TERNÁRIO

// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso'
const pontuacaoUsuario = 109;
const nivelUsuario =
  pontuacaoUsuario >= 1000 ? "Usuario Vip" : "Usuario Normal";

// if (pontuacaoUsuario >= 1000) {
//     console.log('usuario vip')
// } else {
//     console.log('Usuario normal')
// }

console.log(nivelUsuario);

const user = {
  name: "Pedro",
  age: 18,
  adress: {
    street: "Candido portinari",
    number: 386,
    city: {
      cidade: "Embu das Artes",
      bairro: "Itatuba",
    //   mostrarCidadeAndBairro() {
    //     return console.log(`Mora no bairro ${this.bairro} localizada na cidade de ${this.cidade}`);
    //   },
    },
  },
};

console.log(user?.adress?.city?.bairro ?? "Não informado");

console.log(user.adress?.city?.mostrarCidadeAndBairro?.() ?? "Informações não alcançadas"); // - verificação para saber se o método existe

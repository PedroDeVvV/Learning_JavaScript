class controleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    //Método de instância
    aumentarVolume() {
        this.volume += 2;
    }
    //Método de instância
    diminuirVolume() {
        this.volume -= 2;
    }

    //Método estático -> acessada somente pela classe pai, as instancias de controle remoto não tem acesso ao estático.
    static trocaPilha() {
console.log('Ok, Trocadas')
    }
}

const c1 = new controleRemoto('LG');
c1.aumentarVolume();
c1.aumentarVolume();
console.log(c1)

// c1.trocaPilha(); //isso se torna inviavel já que é um método estático
controleRemoto.trocaPilha();
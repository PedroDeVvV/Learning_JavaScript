class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }
    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} já está ligado`);
            return
        }
        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} está desligado`);
            return;
        }
        this.ligado = false;
    }
}

//nas classes usando a palavra extends ele já herdará tudo da classe anterior

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome); //além disso posso adicionar mais coisas, mas irei precisar da SuperClass, e chamar o contrutor da outra função
        this.cor = cor;
        this.modelo = modelo;
    }
}

const s1 = new Smartphone('Iphone', 'Preto', '14 PRO MAX');
s1.ligar();
console.log(s1);
//Tablet e Smartphone são classes irmâs
class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }
    ligar() {
        console.log('Você alterou o método ligar')
    }
}

const t1 = new Tablet('Ipad', 'Tem wifi');
t1.ligar(); //vai procurar primeiro no proprio objeto
console.log(t1);

//herança vem de cima pr abaixo
//ex: você herda tudo dos seus pais, mas seus pais nÂo herdam nd de vocÊ.
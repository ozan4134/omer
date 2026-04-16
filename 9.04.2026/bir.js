const prompt = require("prompt-sync")();

class Bankahesabi {
    bakiye = 0;

    constructor(ad, bakiye) {
        this.ad = ad;
        this.bakiye = bakiye;
    }

    parayatir(miktar) {
        this.bakiye += miktar;
        console.log(`Yeni bakiye: ${this.ad} güncel bakiyeniz: ${this.bakiye} TL'dir`);
    }
}

class kredikartihesabi extends Bankahesabi {
    constructor(ad, bakiye, benimkartim) {
        super(ad, bakiye);
        this.benimkartim = benimkartim;
    }

    guncelkart(miktar) {
        this.bakiye += miktar;
        console.log(`Hesap sahibi: ${this.ad} Bakiye: ${this.bakiye} Limit: ${this.benimkartim}`);
    }
}

const benimki = new kredikartihesabi("ömer özhan", 0, 1000);

// Doğru kullanım
benimki.guncelkart(500);
benimki.parayatir(200);
let unaRicarica: number=5;

interface ISmartphone{
    carica:number; // rappresenta il quantitativo di euro disponibile per le chiamate
    numeroChiamate: number; //numero di chiamate effettuate
    ricarica(carica: number, unaRicarica: number): void; // effettua una ricarica
    chiamata(carica: number, minutiRicarica: number): void; //costo chiamata,  decremento carica, incremento numero chiamate
    numero404(): number; // ritorna carica aggiornato
    getNumeroChiamate(): number; //ritorna numeroChiamate
    azzeraChiamate(): void; // azzera numeroChiamate
}

class User implements ISmartphone{
    carica:number;
    numeroChiamate:number;
    constructor (carica: number, numeroChiamate: number){
        this.carica= carica;
        this.numeroChiamate= numeroChiamate;
    }

    ricarica(unaRicarica: number): void{
    this.carica += unaRicarica;       
    }

    chiamata(minutiDurata:number= Math.floor(Math.random() * 10)): void{
        const tariffa = 0.2;
        this.carica = this.carica - tariffa - (tariffa * minutiDurata);
        this.numeroChiamate++;
    }

    numero404():number{
        return Number(this.carica.toFixed(1));
    }

    getNumeroChiamate(): number{
        return this.numeroChiamate;
    }

    azzeraChiamate():void{
        this.numeroChiamate=0;
    }
}

let FirstUser = new User(0, 0);
let SecondUser = new User(0, 0);
let ThirdUser = new User(0, 0);



document.addEventListener('DOMContentLoaded', () => {
    var contatore1 = <HTMLElement> document.createElement('h3');
    var saldo1 = <HTMLElement> document.createElement('h2');
    contatore1.innerText = 'Numero delle chiamate: ' + FirstUser.getNumeroChiamate();
    saldo1.innerText = 'Saldo disponibile: ' + FirstUser.numero404() + '€';
    document.querySelector('.utente1')?.appendChild(contatore1);
    document.querySelector('.utente1')?.appendChild(saldo1);

    let contatore2 = <HTMLElement> document.createElement('h3');
    let saldo2= <HTMLElement> document.createElement('h2');
    contatore2.innerText = 'Numero delle chiamate: ' + SecondUser.getNumeroChiamate();
    saldo2.innerText = 'Saldo disponibile: ' + SecondUser.numero404() + '€';
    document.querySelector('.utente2')?.appendChild(contatore2);
    document.querySelector('.utente2')?.appendChild(saldo2);


    let contatore3 = <HTMLElement> document.createElement('h3');
    let saldo3 = <HTMLElement> document.createElement('h2');
    contatore3.innerText = 'Numero delle chiamate: ' + ThirdUser.getNumeroChiamate();
    saldo3.innerText = 'Saldo disponibile: ' + ThirdUser.numero404() + '€';
    document.querySelector('.utente3')?.appendChild(contatore3);
    document.querySelector('.utente3')?.appendChild(saldo3);

    document.querySelector('#btnChiama1')?.addEventListener('click', function () {    
        if (FirstUser.numero404() > 0) {
            console.log(FirstUser.numero404())
                FirstUser.chiamata();
        }
        contatore1.innerText = 'Numero delle chiamate: ' + FirstUser.getNumeroChiamate();
        saldo1.innerText = 'Saldo disponibile: ' + FirstUser.numero404() + '€';
    });

    document.querySelector('#ricarica1')?.addEventListener('click', function () {
        FirstUser.ricarica(10);
        contatore1.innerText = 'Numero delle chiamate: ' + FirstUser.getNumeroChiamate();
        saldo1.innerText = 'Saldo disponibile: ' + FirstUser.numero404() + '€';
    });
    document.querySelector('#reset1')?.addEventListener('click', function () {
        FirstUser.azzeraChiamate();
        contatore1.innerText = 'Numero delle chiamate: ' + FirstUser.getNumeroChiamate();
    });
    
    document.querySelector('#btnChiama2')?.addEventListener('click', function () {    
        if (SecondUser.numero404() > 0) {
            console.log(SecondUser.numero404())
            SecondUser.chiamata();
        }
        contatore2.innerText = 'Numero delle chiamate: ' + SecondUser.getNumeroChiamate();
        saldo2.innerText = 'Saldo disponibile: ' + SecondUser.numero404() + '€';
    });

    document.querySelector('#ricarica2')?.addEventListener('click', function () {
        SecondUser.ricarica(10);
        contatore2.innerText = 'Numero delle chiamate: ' + SecondUser.getNumeroChiamate();
        saldo2.innerText = 'Saldo disponibile: ' + SecondUser.numero404() + '€';
    });
    document.querySelector('#reset2')?.addEventListener('click', function () {
        SecondUser.azzeraChiamate();
        contatore2.innerText = 'Numero delle chiamate: ' + SecondUser.getNumeroChiamate();
    });
    
    document.querySelector('#btnChiama3')?.addEventListener('click', function () {    
        if (ThirdUser.numero404() > 0) {
            console.log(ThirdUser.numero404())
            ThirdUser.chiamata();
        }
        contatore3.innerText = 'Numero delle chiamate: ' + ThirdUser.getNumeroChiamate();
        saldo3.innerText = 'Saldo disponibile: ' + ThirdUser.numero404() + '€';
    });

    document.querySelector('#ricarica3')?.addEventListener('click', function () {
        ThirdUser.ricarica(10);
        contatore3.innerText = 'Numero delle chiamate: ' + ThirdUser.getNumeroChiamate();
        saldo3.innerText = 'Saldo disponibile: ' + ThirdUser.numero404() + '€';
    });
    document.querySelector('#reset3')?.addEventListener('click', function () {
        ThirdUser.azzeraChiamate();
        contatore3.innerText = 'Numero delle chiamate: ' + ThirdUser.getNumeroChiamate();
    });
});


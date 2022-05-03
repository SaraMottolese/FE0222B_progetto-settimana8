"use strict";
let unaRicarica = 5;
class User {
    constructor(carica, numeroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiamata(minutiDurata = Math.floor(Math.random() * 10)) {
        const tariffa = 0.2;
        this.carica = this.carica - tariffa - (tariffa * minutiDurata);
        this.numeroChiamate++;
    }
    numero404() {
        return Number(this.carica.toFixed(1));
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
let FirstUser = new User(0, 0);
let SecondUser = new User(0, 0);
let ThirdUser = new User(0, 0);
document.addEventListener('DOMContentLoaded', () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    var contatore1 = document.createElement('h3');
    var saldo1 = document.createElement('h2');
    contatore1.innerText = 'Numero delle chiamate: ' + FirstUser.getNumeroChiamate();
    saldo1.innerText = 'Saldo disponibile: ' + FirstUser.numero404() + '€';
    (_a = document.querySelector('.utente1')) === null || _a === void 0 ? void 0 : _a.appendChild(contatore1);
    (_b = document.querySelector('.utente1')) === null || _b === void 0 ? void 0 : _b.appendChild(saldo1);
    let contatore2 = document.createElement('h3');
    let saldo2 = document.createElement('h2');
    contatore2.innerText = 'Numero delle chiamate: ' + SecondUser.getNumeroChiamate();
    saldo2.innerText = 'Saldo disponibile: ' + SecondUser.numero404() + '€';
    (_c = document.querySelector('.utente2')) === null || _c === void 0 ? void 0 : _c.appendChild(contatore2);
    (_d = document.querySelector('.utente2')) === null || _d === void 0 ? void 0 : _d.appendChild(saldo2);
    let contatore3 = document.createElement('h3');
    let saldo3 = document.createElement('h2');
    contatore3.innerText = 'Numero delle chiamate: ' + ThirdUser.getNumeroChiamate();
    saldo3.innerText = 'Saldo disponibile: ' + ThirdUser.numero404() + '€';
    (_e = document.querySelector('.utente3')) === null || _e === void 0 ? void 0 : _e.appendChild(contatore3);
    (_f = document.querySelector('.utente3')) === null || _f === void 0 ? void 0 : _f.appendChild(saldo3);
    (_g = document.querySelector('#btnChiama1')) === null || _g === void 0 ? void 0 : _g.addEventListener('click', function () {
        if (FirstUser.numero404() > 0) {
            console.log(FirstUser.numero404());
            FirstUser.chiamata();
        }
        contatore1.innerText = 'Numero delle chiamate: ' + FirstUser.getNumeroChiamate();
        saldo1.innerText = 'Saldo disponibile: ' + FirstUser.numero404() + '€';
    });
    (_h = document.querySelector('#ricarica1')) === null || _h === void 0 ? void 0 : _h.addEventListener('click', function () {
        FirstUser.ricarica(10);
        contatore1.innerText = 'Numero delle chiamate: ' + FirstUser.getNumeroChiamate();
        saldo1.innerText = 'Saldo disponibile: ' + FirstUser.numero404() + '€';
    });
    (_j = document.querySelector('#reset1')) === null || _j === void 0 ? void 0 : _j.addEventListener('click', function () {
        FirstUser.azzeraChiamate();
        contatore1.innerText = 'Numero delle chiamate: ' + FirstUser.getNumeroChiamate();
    });
    (_k = document.querySelector('#btnChiama2')) === null || _k === void 0 ? void 0 : _k.addEventListener('click', function () {
        if (SecondUser.numero404() > 0) {
            console.log(SecondUser.numero404());
            SecondUser.chiamata();
        }
        contatore2.innerText = 'Numero delle chiamate: ' + SecondUser.getNumeroChiamate();
        saldo2.innerText = 'Saldo disponibile: ' + SecondUser.numero404() + '€';
    });
    (_l = document.querySelector('#ricarica2')) === null || _l === void 0 ? void 0 : _l.addEventListener('click', function () {
        SecondUser.ricarica(10);
        contatore2.innerText = 'Numero delle chiamate: ' + SecondUser.getNumeroChiamate();
        saldo2.innerText = 'Saldo disponibile: ' + SecondUser.numero404() + '€';
    });
    (_m = document.querySelector('#reset2')) === null || _m === void 0 ? void 0 : _m.addEventListener('click', function () {
        SecondUser.azzeraChiamate();
        contatore2.innerText = 'Numero delle chiamate: ' + SecondUser.getNumeroChiamate();
    });
    (_o = document.querySelector('#btnChiama3')) === null || _o === void 0 ? void 0 : _o.addEventListener('click', function () {
        if (ThirdUser.numero404() > 0) {
            console.log(ThirdUser.numero404());
            ThirdUser.chiamata();
        }
        contatore3.innerText = 'Numero delle chiamate: ' + ThirdUser.getNumeroChiamate();
        saldo3.innerText = 'Saldo disponibile: ' + ThirdUser.numero404() + '€';
    });
    (_p = document.querySelector('#ricarica3')) === null || _p === void 0 ? void 0 : _p.addEventListener('click', function () {
        ThirdUser.ricarica(10);
        contatore3.innerText = 'Numero delle chiamate: ' + ThirdUser.getNumeroChiamate();
        saldo3.innerText = 'Saldo disponibile: ' + ThirdUser.numero404() + '€';
    });
    (_q = document.querySelector('#reset3')) === null || _q === void 0 ? void 0 : _q.addEventListener('click', function () {
        ThirdUser.azzeraChiamate();
        contatore3.innerText = 'Numero delle chiamate: ' + ThirdUser.getNumeroChiamate();
    });
});

'use strict';

/* Deklaracja zmiennej typu liczbowego */
var liczba = 10;

console.log(liczba);

/* Deklarcja zmiennej typu ciąg znaków */
var tekst = '   Dzień dobry BARDZO!   ';

console.log(tekst);

console.log(tekst.split(" "));

console.log(tekst.trim());

/* Deklaracja zmiennej typu logicznego */
var zmienaLogiczna = (2+2 == 5);

console.log(zmienaLogiczna);

if(zmienaLogiczna) {
    console.log('Warunek spełniony')
} else {
    console.log('Warunek niespełniony')
}

/* Deklaracja zmiennej typu niezdefiniowanego */
var zmiennaNiezdefiniowana;

console.log(zmiennaNiezdefiniowana);

/* Deklaracja zmiennej typu Null */
var tablica = [null, 'element1', 'element2'];

console.log(tablica[0]);

/* Sprawdzanie tyu zmiennej */
console.log(typeof zmienaLogiczna);
console.log(typeof liczba);
console.log(typeof tekst);

'use strict';

var liczbaPierwsza = 5;
var liczbaDruga = 2;

/* Oparator MODULO czyli reszta z dzielenia */
console.log('Modulo ' + liczbaPierwsza % liczbaDruga);

/* Operator ++ (INKREMENTACJA) */
while(liczbaPierwsza > liczbaDruga) {
    console.log('Inkrementacja ' + liczbaPierwsza);
    --liczbaPierwsza;
}

/* Operatory PRZYPISANIA */
var liczbaTrzecia = 6;
console.log('Przypisanie-1 ' + liczbaTrzecia);

liczbaTrzecia = liczbaTrzecia + 3;

console.log('Przypisanie-2 ' + liczbaTrzecia);

var liczbaCzwarta = 6;
liczbaCzwarta += 3;
liczbaCzwarta -= 1;
liczbaCzwarta *= 2;
liczbaCzwarta /= 4;
liczbaCzwarta %= 4;

console.log('Przypisanie-3 ' + liczbaCzwarta);

/* Oparatory porównania */

if('2' === 2) {
    console.log('To jest prawda');
} else {
    console.log('To jest fałsz');
}

/* Operatory logiczne */

/* Warunek AND (i) */
if('2' <= 2 && 8 > 9) {
    console.log('To jest prawda');
} else {
    console.log('To jest fałsz');
}

/* Warnek OR (lub) */
if('2' <= 2 || 8 > 9) {
    console.log('To jest prawda');
} else {
    console.log('To jest fałsz');
}

/* Negacja */
if(!2<2) {
    console.log('To jest prawda!');
} else {
    console.log('To jest fałsz!');
}

/* Operator warunkowy (skrócone IF) */
var zmiennaWarunek = (2<3)?'Dwa jest mniejsze od 3!':'To jest nieprawda';
console.log(zmiennaWarunek);
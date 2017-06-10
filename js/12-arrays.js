'use strict';

var tablicaImion = ['Kasia', 'Artur', 'Robert'];

console.log(tablicaImion[2]);

console.log(tablicaImion);

tablicaImion[2] = 'Piotr';

console.log(tablicaImion[2]);

//Dodawanie na końcu tablicy
tablicaImion.push('Konrad');

console.log(tablicaImion);

//Zdejmowanie z końca tablicy
tablicaImion.pop();

console.log(tablicaImion);

//Dodawanie na początku
tablicaImion.unshift('Andrzej','Tomek');

console.log(tablicaImion);

//Zdejmowanie z początku
tablicaImion.shift();

console.log(tablicaImion);

console.log(tablicaImion.length);

for (var i = 0; i<tablicaImion.length; i++) {
    console.log('Imię studenst to ' + tablicaImion[i]);
}

//Łączenie wartości tablic
console.log(tablicaImion.join('#'));

//Odwracanie kolejności tablicy
console.log(tablicaImion.reverse());

//Sortowanie
console.log(tablicaImion.sort());

console.log(tablicaImion.sort().reverse());

//Łączenie tablic
var noweImiona = ['Łukasz', 'Kamil'];
console.log(tablicaImion.concat(noweImiona));

console.log(tablicaImion.indexOf('Kasia'));

console.log(tablicaImion.slice(0,2));

//Dodawanie do środka
tablicaImion.splice(2,0,'Ania');

console.log(tablicaImion);



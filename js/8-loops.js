'use strict';

/* Pętla FOR */

for (var i = 0; i < 5; i++) {
    console.log('Wykonanie pętli ' + i);
}

var studenci = ['Konrad', 'Andrzej', 'Artur', 'Kasia', 'Piotr'];
for (var i = 1; i<=studenci.length; i++) {
    console.log('Student ' + i + ' ma na imię ' + studenci[i-1]);
}

/* Pętla WHILE */

var it = 1;
while (it <= 10) {
    console.log('While ' + it);
    it++;
}

var itt = Math.floor(Math.random() * 10);
while (itt != 5) {
    console.log('While2 ' + itt);
    itt = Math.floor(Math.random() * 10);
}

/* Pętla DO WHILE */

var ittt = Math.floor(Math.random() * 10);
do {
    console.log('Do while ' + ittt);
    ittt = Math.floor(Math.random() * 10);
}
while (ittt != 5);

/* Instrukcja BREAK */

for (var i = 0; i < 5; i++) {
    if(i == 3) {
        break;
    }
    console.log('Break ' + i);
}

/* Instrukcja CONTINUE */

for (var i = 0; i < 10; i++) {
    if (i%2 == 0) {
        continue;
    }
    console.log('Continue' + i);
}
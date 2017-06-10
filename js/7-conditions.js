'use strict';

/* Instrukcje wrunkowe */

/* Warunek IF */
var wzrostKasi = 167;
var wzrostPiotra = 170;

if(wzrostKasi < wzrostPiotra) {
    console.log('To jest prawda');
}

/* Waruek IF ELSE */
if(wzrostKasi > wzrostPiotra) {
    console.log('To jest prawda');
} else {
    console.log('To nie jest prawda');
}

/* Warunek IF ELSE IF */
if(wzrostKasi > wzrostPiotra) {
    console.log('To jest prawda');
} else if (wzrostKasi == wzrostPiotra) {
    console.log('Są równi wzrostem');
} else {
    console.log('To nie jest prawda');
}

/* Warunek SWITCH */
var kolor = 'niebieski';
switch (kolor) {
    case 'czerwony':
        console.log('Kolor jest czerwony');
        break;
    case 'zielony':
        console.log('Kolor jest zielony');
        break;
    default:
        console.log ('Inny kolor');
}
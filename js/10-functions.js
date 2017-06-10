'use strict';

function addNumbers(par1, par2) {
    
    var num1 = par1;
    var num2 = par2;
    
    var wynik =num1 + num2;
    
    console.log('Wynik dodawania to ' + wynik);
    
    return wynik;
}

addNumbers(2,2);
addNumbers(7,5);
addNumbers('cześć ','kolego');
addNumbers(1); //Not a Number
addNumbers('cześć');
addNumbers(6.55,4.455);

var wynikFunkcji = addNumbers(6,9);

console.log(wynikFunkcji);


function ileLiczbParzystych (parametr) {
    var evenNumbers=0;
    for (var i = 1; i<=parametr; i++) {
        if(i%2 == 0) {
            evenNumbers++}
    }
    return evenNumbers;
}

function ileLiczbPodzielnych (par1, par2) {
    var resultNumbers=0;
    for (var i = 1; i<=par2; i++) {
        if(i%par1 == 0) {
            resultNumbers++}
    }
    return resultNumbers;
}

function ileLiczbPodzielnychWPrzedziale (par1, par2, par3) {
    var finalNumbers=0;
    for (var i = par2; i<=par3; i++) {
        if(i%par1 == 0) {
            finalNumbers++}
    }
    return finalNumbers;
}

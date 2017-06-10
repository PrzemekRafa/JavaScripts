'use strict';

function outerFunction () {
    var zmienna = 'text';
    
    function innerFunction(zmienna) {
        console.log(zmienna);
        
        var zmienna = 1;
        
        console.log(zmienna);
    }
        console.log(zmienna);
    
    return innerFunction(zmienna);
}

outerFunction ();
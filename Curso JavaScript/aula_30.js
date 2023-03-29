// Introdução a Arrays

// Add elemento a um Array

const numeros = [ 1 , 2 , 3 ];

// Início do Array
numeros.unshift ( 0 );
console.log ( numeros );

// Meio do Array 
numeros.splice ( 1,0,'x' );
console.log ( numeros );

// Final do Array
numeros.push ( 4 );
console.log ( numeros );

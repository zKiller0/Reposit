// Esvaziando o Array 
let numeros = [ 1 , 2 , 3 , 4 , 5 , 6 ];
let outros = numeros;

// Solução 1 
// numeros = [ ];
// console.log ( numeros );

// Solução 2 
// numeros.length = 0;       : Melhor Método
// console.log ( outros );

// Solução 3 
// numeros.splice ( 0 , numeros.length );
// console.log ( numeros );
// console.log ( outros ); 

// Solução 4
while ( numeros.length > 0 )
    numeros.pop ( );
console.log ( numeros );
console.log ( outros )
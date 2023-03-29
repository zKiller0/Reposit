// Removendo Elementos de um Array

const numeros = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 ];
numeros.push ();
numeros.unshift ();
numeros.splice ();

// Final

const ultimo = numeros.pop ();
console.log ( ultimo);
console.log ( numeros );

// Início

const primeiro = numeros.shift ();
console.log ( primeiro );
console.log ( numeros );

// No Meio

const meio = numeros.splice ( 2 , 1 );
console.log ( meio );
console.log ( numeros );
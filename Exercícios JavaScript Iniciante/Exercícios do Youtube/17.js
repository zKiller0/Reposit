// Operadores Aritiméticos
// Fórmula de Baskara

let a = 1;
let b = 8;
let c = -9;

let Delta = Math.pow ( b , 2 ) - ( 4 * a * c );

let x1 = ( - b + Math.sqrt( Delta ) ) / ( 2 * a ) ;
let x2 = ( - b - Math.sqrt( Delta ) ) / ( 2 * a ) ;

alert ( `A primeira raiz é = ${x1}` );
alert ( `A segunda raaiz é = ${x2}` );


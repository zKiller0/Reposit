// Baskara

let a = parseFloat ( prompt ( 'Digite um número: ') ) ;
let b = parseFloat ( prompt ( 'Digite outro número: ' ) ) ;
let c = parseFloat ( prompt ( 'Digite outro número: ' ) ) ;

let delta = Math.pow ( b , 2 ) -  4 * a * c ;

let x1 = ( -b + Math.sqrt(delta) ) / ( 2 * a ) ;
let x2 = ( -b - Math.sqrt(delta) ) / ( 2 * a ) ;

alert ( 'X1 = ' + x1.toFixed(2) + '\nX2 = ' + x2.toFixed(2) );


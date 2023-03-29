// Menor de 3 números 

let x = parseFloat ( prompt ( 'Digite um número: ' ) );
let y = parseFloat ( prompt ( 'Digite outro número' ) );
let z = parseFloat ( prompt ( 'Digite outro número' ) );

if ( x < y ) {
    if ( x < z ) { 
        alert ( x + ' é o menor' );
    }
}

if ( y < x ) { 
    if ( y < z ) {
        alert ( y + ' é o menor' );
    }
}

if ( z < x ) {
    if ( z < y) {
        alert ( z + ' é o menor' );
    }
}
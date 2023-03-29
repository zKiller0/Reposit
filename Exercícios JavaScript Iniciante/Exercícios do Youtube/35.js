// Menor de 3 números

let x = parseInt ( prompt ( 'Digite um número: ' ) );
let y = parseInt ( prompt ( 'Digite outro número: ' ) );
let z = parseInt ( prompt ( 'Digite outro número: ' ) );

if ( x < y ) {
    if ( x < z ) {
        alert ( 'X é menor' );
    }
}

if ( y < x ) {
    if ( y < z) { 
        alert ( 'Y é menor' );
    }
}

if ( z < x ) {
    if ( z < y ) {
        alert ( 'Z é menor' );
    }
}
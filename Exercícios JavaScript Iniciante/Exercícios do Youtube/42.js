// Imprimindo indice par

let X = parseInt ( prompt ( 'Digite um número: ' ) );
let V = [];

for ( i = 0; i < X; i++ ) {
    V [ i ] = parseInt ( prompt ( 'Digite um número: ' ) );
}

for ( j = 0; j < X; j++ ) {

    if ( j % 2 == 0 ){
         alert (  V [ j ] + ' ' );
    }

}
// Substituição no Vetor

let Vetor = [];

for ( i = 0; i < 6; i ++ ) {
    Vetor [ i ] = parseInt ( prompt ( 'Digite um número: ' ) );
}

for ( j = 0; j < 6; j++ ) {
    if ( Vetor [ j ] <= 0) {
            Vetor [ j ] = 1;
    }
}

alert ( Vetor );
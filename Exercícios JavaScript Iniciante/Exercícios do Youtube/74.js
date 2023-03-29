// Intercalando Vetores

// Vetores
let a = [];
let b = [];

// Repetição Contada
for ( i = 0; i < 10; i++ ) {

    a [ i ] = parseInt ( prompt ( 'Vetor A: ' ) );
}

for ( j = 0; j < 10; j++ ) {

    b [ j ] = parseInt ( prompt ( 'Vetor B: ' ) );
}

// Intercalando
let c = [];

let l = 0 , m = 0;

for ( k = 0; k < 20; k++ ) {

    if ( k % 2 == 0 ) {
        c [ k ] = a [ l ];
        l++;
    }

    else {
        c [ k ] = b [ m ];
        m++;
    }
}

alert ( c );
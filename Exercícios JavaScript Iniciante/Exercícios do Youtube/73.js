// Somar dois Vetores

// Vetores
let a = [];
let b = [];

// Contadores
let i , j;

// Repetição Contada
for ( i = 0; i < 10; i++ ) {

    a [ i ] = parseInt ( prompt ( 'Digite um número: ' ) ); 
}

for ( j = 0; j < 10; j++ ) {

    b [ j ] = parseInt ( prompt ( 'Digite outro número: ' ) );
}

// Vetor
let c = [];

// Repetição Contada
for ( k = 0; k < 10; k++ ) {

    // Somando os valores dentro dos vetores atraves de C.
    c [ k ] = a [ k ] + b [ k ]; 

    alert ( c [ k ] + ' ' );
}


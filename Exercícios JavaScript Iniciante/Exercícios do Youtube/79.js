// Seleção de Vetor

// Vetor
let A = [];

// Repetição Contada
for ( i = 0; i < 6; i++ ) {

    A [ i ] = parseInt ( prompt ( 'Digite um número: ' ) );
}

// Impreesão dos elementos 
for ( j = 0; j < 6; j++ ) {
    
    if ( A [ j ] <= 10 ) { 
        alert ( `[ ${j} ] = ${A[ j ]}\n` );
    }
}
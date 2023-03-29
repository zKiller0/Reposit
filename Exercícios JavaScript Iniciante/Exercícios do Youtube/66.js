// Preenchendo o Vetor

// Vetor
let n = []; 

n [ 0 ] = parseInt ( prompt ( 'Digite um número: ' ) );

// Contador para preencher o vetor
for ( i = 1; i < 6; i++ ) {

    n [ i ] = n [ i - 1 ] * 2;
}

// Mostrando
alert ( `Vetor ${n}`)


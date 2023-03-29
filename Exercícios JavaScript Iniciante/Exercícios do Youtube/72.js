// Imprimindo elementos de um Vetor

// Entrada do valor inteiro
let n = parseInt ( prompt ( 'Digite um número: ' ) );

// Vetor
let v = [];

// Contador
for ( i = 0; i < n; i++ ) {

    // Valores de entrada para preencher o Vetor
    v [ i ] = parseInt ( prompt ( 'Preencha o Vetor: ' ) );
}

// Contador 
for ( j = 0; j < n; j++ ) {

    // Verificando se é par
    if ( j % 2 == 0 ) {
        alert ( v [ j ] + ' ' );
    }
}


// Busca em Vetor

// Vetor
let x = [];

// Contador
for ( i = 0; i < 15; i++ ) {

    // Vetor [ contador ] 
    x [ i ] = prompt ( '' );
}

// Entrada
let letra = prompt ( 'Digite a letra: ' );

// Verificar as posições
for ( j = 0; j < 15; j++ ) {

    if ( letra == x [ j ] ) {
        alert ( `Contador ${j} ` );
    }
}
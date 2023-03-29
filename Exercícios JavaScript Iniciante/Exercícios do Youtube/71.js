// Busca de palavras em um Vetor de texto

// Vetor 
let frutas = [];

// Contador
for ( i = 0; i < 8; i++ ) {
    
    // Entrada 
    frutas [ i ] = prompt ( 'Digite um fruta: ' );
}

// Recebendo a palavra
let palavra = prompt ( 'Digite a fruta a ser buscada: ' );

// Buscando a palavra
for ( j = 0; j < 8; j++ ) {
    
    if ( frutas [ j ] == palavra ) {
        alert ( 'Encontrei' );
    }

    else { 
        alert ( 'Não encontrei' );
    }
} 
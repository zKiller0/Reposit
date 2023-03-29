// Encontrando um elemento em um Vetor

/* 
    Armazena 8 nomes de frutas no Vetor.

    Receber um nome de uma fruta do usuário.

     - Buscar nome no vetor.
     - Verificar se o nome é identico.
     - Caso encontrar, mensagem 'Encontrei'.
     - Caso não, mensagem 'Não encontrei'.
*/

// Vetor
let frutas = [ ];

// Contador
for ( i = 0; i < 8; i++ ) {

        // Posição ( 0 )
    frutas [ 0 ] = prompt ( '' );
}

// Entrada
let fruta = prompt ( '' );

// Contador para verificar se existe a fruta
for ( h = 0; h < 8; h++ ) {

    if ( frutas [ i ] == fruta ) {
        alert ( 'Encontrei' );
    }

    else {
        alert ( 'Não encontrei' );
    }
}

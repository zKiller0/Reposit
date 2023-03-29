// Evoluindo na busca de um elemento em um vetor

let frutas = []; // Vetor

//Repetição
for ( i=0; i < 8; i++ ) {
        frutas [ i ] = prompt ( 'Digite uma fruta: ' );
}

let fruta = prompt ( 'Digite a fruta que você quer encontrar: ' );

for ( s = 0; s < 8; s++ ) {
    if ( frutas [ s ] === fruta ) {
        alert ( 'Encontrei' );
    }

    else {
        alert ( 'Não encontrei' );
    }

    alert ( '\n' );
}
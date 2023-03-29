// Faça um programa que leia um vetor numérico de 10 posições. Depois, ordene o vetor em ordem crescente e apresente os elementos ordenados.

var vetor = new Array ();

// Leitura dos valores

for ( var j = 0; j < 10; j++ ) {

    console.log ( 'Digite a ' + j + ' posicao do vetor: ' );
    vetor [ j ] = Number ( prompt( ) );

}

// Ordenação

for ( var i = 0 ; i < vetor.length ; i++ ) {
    for ( var k = i ; k > 00 && vetor [ k ] < vetor [ k - 1 ] ; k-- ) {

        var aux = vetor [ k - 1 ];
        vetor [ k - 1 ] = vetor [ k ];
        vetor [ k ] = aux;
    }
}

console.log ( 'O vetor ordenado é ' + vetor );

// Loop 
// Deu errado
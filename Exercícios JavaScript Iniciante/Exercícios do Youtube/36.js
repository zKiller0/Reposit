// Imprimir o índice par

let N = parseInt ( prompt ( 'Digite um número: ' ) );

let V = [];
 
for ( i = 0; i < N; i++ ) { 
    V [i] = parseInt ( prompt ( 'Digite um número: ' ) );
}

for ( j = 0; j < N; j++ ) {
    if ( j % 2 == 0 ){
        alert ( V[j] + " " );
    }

}


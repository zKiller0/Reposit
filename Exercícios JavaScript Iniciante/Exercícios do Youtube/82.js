// Par , Ímpar , Negativo ou Positivo

let n = parseInt ( prompt ( 'Digite a quantidade de números: ' ) );

for ( i = 0; i < n; i++ ) {

    X = Number ( prompt ( 'Digite um número: ' ) );
    
    if ( X == 0) {

        alert ( 'Par Nulo\n' );
    }

    else { 

        if ( X % 2 == 0 ) {

            if ( X > 0 ) {
                alert ( 'Par Positivo\n' );
            }

            else { 
                alert ( 'Par Negativo\n' );
            }
        }

        else {

            if ( X > 0 ) {
                alert ( 'Ímpar Positivo\n' );
            }

            else {
                alert ( 'Ímpar Negativo\n' );
            }
        }

    }
    
}
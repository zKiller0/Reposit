// Par ou Ímpar?
// Receber uma quantidade de valores para avaliar
// Funçao exibe se cada valor é par ou ímpar

exibirTipo(5);

function exibirTipo( limite ) {
    for ( let i = 0; i <= limite; i ++ ) {
        if ( i % 2 === 0 ) // Par ( Modulus )
          console.log ( i, 'Par' );
        else 
           console.log ( i,'Ímpar' );
    }
}
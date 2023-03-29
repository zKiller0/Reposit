// Números Primos

// Primos e Compostos

// Exemplos : 10 , 11

exibirNumerosPrimos ( 100 ) ;

function exibirNumerosPrimos ( limite ) {
 for ( let numero = 2; numero <= limite; numero ++ ) {

    if ( NumeroPrimo ( numero ) ) console.log (numero) ;
 }
}
function NumeroPrimo ( numero ) { 
    let ehPrimo = true;

    for ( let divisor = 2; divisor < numero; divisor ++ ) {
        if ( numero % divisor === 0 ) {
         return false;
           
        }
    }
    return true ;
}
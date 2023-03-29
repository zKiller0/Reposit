// Com criar uma função ( para calcular a raiz quadrada de um número )

// Nome da função = raiz / N = parametro
function raiz ( n ) {

    if ( n > 0 ) {

        let a0 = 1;

        let a1;

        for ( c = 0; c < 10; c++ ) {
            
            a1 = ( a0 + ( n / a0 ) ) / 2;

            /// alert ( `a1 = ${a1}` );

            a0 = a1; 
        }
    }

}

// Entrada de dados 
let n = parseFloat ( prompt ( 'Digite um número: ' ) );

let raiz_Analítica = Math.sqrt ( n );

//  Raíz Aproximada
let raiz_Aprox = raiz( n );

console.log ( `Raiz Aproximada = ${raiz_Aprox} \nRaiz Analítica = ${raiz_Analítica}` );
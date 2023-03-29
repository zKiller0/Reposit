// Preenchendo um Vetor II 

// Vetor
let Vetor = [];

// Váriavel pro contador
let i;

// Receber váriavel
let num = parseInt ( prompt ( 'Digite um número: ' ) );

// Definindo posição ( 1 )
Vetor [ 0 ] = num;

// Contador
for ( i = 1; i < 6; i++ ) {
    
        // Calculando a posição da metade do valor anterior
    Vetor [ i ] = Vetor [ i - 1 ] / 2 ;
}

// Mostrando o resultado
alert ( `Vetor ${Vetor}` );
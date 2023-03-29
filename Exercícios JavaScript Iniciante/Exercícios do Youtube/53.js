// Repetição contada

// Receber 10 números do usúario 
for ( cont = 0; cont < 10; cont++ ) {

    let num = parseInt ( prompt ( 'Digite um número: ' ) );

    let divisores = 0; // Váriavel usada para contar os divisores do número

    for ( cont1 = 1; cont1 <= num; cont1++ ) {  // Percorrebdo os antecessores a esse número
        if ( num % cont1 == 0 ) {
            divisores++;
        }
    }

    if ( divisores == 2 ) {
        alert ( 'É primo' );
    }

    else {
        alert ( 'Não é primo' );
    }
}



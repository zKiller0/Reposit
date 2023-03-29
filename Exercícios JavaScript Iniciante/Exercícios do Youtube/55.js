// Pare no 22

// Receber números inteiros positivos como ENTRADA.

// Quando receber o número 22 ou negativo o programa deve parar.

// E deve mostrar os números recebidos exceto o 22.

let num;

do {
    num = parseInt ( prompt ( 'Digite um número: ' ) );

    if ( num != 22 && num > 0 ) {
        alert ( num );  // Verificando para mostrar o número.
    }

} while ( num != 22 && num > 0 ); // Condição para continuar ( repetição ).
                                  // Verificando para continuar.


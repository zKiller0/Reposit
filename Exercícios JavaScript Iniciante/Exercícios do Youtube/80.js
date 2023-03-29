// É primo ou não?

// Entrada
let n = parseInt ( prompt ( 'Digite um número: ' ) );

// Variavel para o Contador de divisores
let divisores = 0;

// Repetição Contada
for ( a = 1; a <= n; a++ ) {

    if ( n % a == 0 ) { 
        divisores++; 
    }
}

// Condições
if ( divisores == 2 ) {
    
    alert ( 'É primo' );
}

else { 
    
    alert ( 'Não é primo' );
}
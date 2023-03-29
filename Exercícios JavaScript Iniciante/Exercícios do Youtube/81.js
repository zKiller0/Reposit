// Maior de 10 números

// Entrada
let X;

// Contador
let maior = 0;

// Repetição Contada
for ( i = 0; i < 10; i++ ) {
    
   X = parseInt ( prompt ( 'Digite um número: ' ) );

   if ( X > maior ) {
    maior = X;
   }

}

// Imprimindo
alert ( `O maior é ${maior}` );

   
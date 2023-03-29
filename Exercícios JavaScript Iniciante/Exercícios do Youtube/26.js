// Verificar se um número é divisivel por 3 ou por 4

let numero = parseFloat ( prompt ( 'Digite um número:' ) );

if ( numero % 3 == 0 && numero % 4 == 0 ) {
     alert ( 'O número é divisível por 3 e 4' );
} 

else if ( numero % 3 == 0 && numero % 4 != 0 ) {
     alert ( 'O número é divisível por 3 e não por 4' );
}

else if ( numero % 3 != 0 && numero % 4 == 0 ) {
    alert ( 'O número é divisível por 4 e não por 3' );
}

else { 
    alert ( 'Número não divisível por 3 e por 4' );
}
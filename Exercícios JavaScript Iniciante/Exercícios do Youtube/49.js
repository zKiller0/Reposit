// Como usar o comando while 

/* 
Repetição Condicional

Condição de repetição : é a condição na qual o while
vai repetir .

Condição Parada : é a condição que o While vai parar 
de repetir.

While ( Condição ) {
    // Bloco de código
}

// DO While

Do {
    //Bloco de código
} 

While ( Condição );

*/


let num = Number ( prompt ( 'Digite um número: ' )  );

while ( num > 0) { 

        if ( num % 2 == 0 ) {
            alert ( num + '^2 = ' + ( num ** 2 ) );
        }

        else {
            alert ( num + ' x 2 = ' + ( num * 2 ) );
        }

        num = Number ( prompt ( 'Digite um número: ' ) );

    }


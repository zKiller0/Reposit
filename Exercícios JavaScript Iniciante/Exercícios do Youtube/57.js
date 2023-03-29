// Porcentagem dos maiores que 15

/*
 1 - Receber vários números inteiros.
 2 - Calcular a porcentagem dos números ímpares maiores que 15.
 3 - Mostrar sáida o valor da porcentagem.

 ! - Condição de repetição = número diferente de 0.
 ! - Condiçao de parada = número informado 0.

*/

let num = parseInt ( prompt ( 'Digite um número: ' ) );

let contImpar = 0, contTotal = 0; // Váriaveis Somatorias, tem que ser = 0.

 while ( num != 0 ) {
    
    contTotal++;

    if ( num % 2 != 0 && num > 15 ) {
        contImpar++;
    }
  
    
    num = parseInt ( prompt ( 'Digite um número: ' ) );
 
}

let porcent = ( contImpar * 100 ) / contTotal;

alert ( `%${porcent.toFixed(2)}` );

/*  Outra Forma de Fazer

let num , contImpar = 0 , contTotal = 0;

do {
    numero = parseInt ( prompt ( 'Digite um número: ' ) );
    
    if ( num != 0 ) {
        contTotal++;

    if ( num % 2 != 0 && num > 15 ) {
        contImpar++;
        }

    }
    

} while ( numero != 0 );

let porcent = ( contImpar * 100 ) / contTotal;

alert ( `%${porcent.toFixed(2)}` );

*/
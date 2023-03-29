// Calculando a média de idade de um grupo

/*
    1 - Ler número indeterminado de idades.

    2 - Calcular a média da idade e mostrar.

    3 - Encerrar quando uma idade negativa for informada.

    4 - Não incluir a idade negativa no calculo da média.

 ! - Condição de parada = idade negativaa.

 ! - Condição de repetição = idade positiva. 

*/

// while ( idade > 0 ) ; Dessa forma ele compara primeiro pra depois executar.
// Assim precisando de um valor para a váriavel idade.
    
let idade , soma = 0 , cont = 0 ;

do {
    idade = parseInt ( prompt ( 'Digite a idade: ' ) );

    if ( idade > 0 ) { // Calculando a soma dos valores 

            soma = soma + idade ;
            cont++;


    }

} while ( idade > 0 );

let media = soma / cont ;

alert ( `A média de idades é ${media.toFixed(1)}` );



// Repetição Contada

/*
 - Quantidade exata de repetições.

     for ( Contador; Condição de Contagem; Incremento ) {
         
         // Bloco de código


     }

*/

// Receber um valor real
let valor = parseFloat ( prompt ( 'Digite um valor de uma xerox: ' ) );

// Repetição
alert ( `Valor da xerox = R$${valor}` );

for ( cont = 1; cont <= 10; cont++ ) {
    alert ( `${cont} = R$${ (cont * valor).toFixed(2)}` )
}




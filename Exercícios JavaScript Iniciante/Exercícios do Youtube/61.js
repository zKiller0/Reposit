// Implementado o método e Herão 

/*
  - É um método de calcular a raiz quadrada aproximada de um número
  que não é um quadrado perfeito. 

  - N é o número o qual desejamos calcular a raiz quadrada.

  - a0 é um valor pequeno, pode inicialmente ser considerado = 1.
  - a1 é o valor obtido da aproximação. 
  - a2 é um valor mais aproximado do que a1.

 - Fórmula 
  a1 = ( a0 + ( n / a0 ) ) / 2

 - Usaremos a0 = a1 a cada aproximaçãp para obter a2 na próxima aproximação.

    a2 = ( a1 + ( n / a1 ) ) / 2

*/

// Recebe um número inteiro postivo 
let n = parseInt ( prompt ( 'Digite um número: ' ) );

if ( n > 0 ) {

    let raiz = Math.sqrt ( n );

    alert ( `raiz = ${raiz}` );

    let a0 = 1;
    let a1;

    for ( i = 0; i < 5; i++ ) {

    let a1 = ( a0 + ( n / a0 ) ) / 2;
    alert ( `a1 = ${a1}` );

    a0 = a1;
    
  }


}
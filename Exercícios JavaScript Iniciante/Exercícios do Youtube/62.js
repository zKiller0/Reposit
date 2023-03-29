// Calculando os N termos da Sequência de Fibonacci

/* Os 10 primeiros termos da sequência são:
 1 1 2 3 5 8 13 21 34 55.

    - Receber N 

    - Calcular os N termos da sequência 
        
        t1 = 1
        t2 = 1 
        ...
        tn = t1 + t2 

    - Atualiza os termos anteriores

        t1 = t2 
        t4 = t2 + t3

    - Repete N vezes

 */

let n = parseInt ( prompt ( 'Digite um número: ' ) );

let t1 = 1;
let t2 = 1;

for ( i = 0; i < n; i++ ) {
    if ( i == 1 || i == 2 ) {
        alert ( 1 );
    }

    else {
        tn = t1 + t2;
        alert ( `${tn}` );

        t1 = t2;
        t2 = tn;
    }
}

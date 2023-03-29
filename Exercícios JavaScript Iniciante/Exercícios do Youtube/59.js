// Fatorial de um número 

/* Fatorial

- Crie um programa que leia um valor N
  e calcula e imprime seu respectivo fatorial.

  - Fórmula : N1 = N * ( N - 1 ) * ( N - 2 ) * ... * ( N ( N - 1) );

  - 5! = 5 * ( 5 - 1) * ( 5 - 2 ) * ( 5 - 3 ) * ( 5 * 4 )
  - 5! = 5 * 4 * 3 * 2 * 1
  - 5! = 120
    
*/

let n = parseFloat ( prompt ( 'Digite um número: ' ) );

let fatorial = n ;

for ( cont = 1; cont < n; cont++ ) {
    alert ( 'Fatorial = ' + fatorial + ' * ( '+n+' - '+cont+')'); // Há outra forma de fazer isso ._.
    fatorial = fatorial * ( n - cont );
}

alert ( `${n}! = ${fatorial}` );
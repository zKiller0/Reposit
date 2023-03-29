// Encontrando divisores de um número

/*
 Implemente um programa que recebe um valor inteiro positivo de N.

    Divisores de 12 = 1 , 2 , 3 , 4 , 6 e 12.

    Repete de 1 até N ( inclusive ).

*/

let n = parseInt ( prompt ( 'Digite um número: ' ) );

for ( i = 1; i <= n; i++ ) {
    if ( n % i == 0 ) {
        alert ( `${i} `);
    }
}
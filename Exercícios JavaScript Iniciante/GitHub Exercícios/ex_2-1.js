// Faça um programa que leia 2 números, some-os e exiba uma mensagem com o resultado apenas se o resultado for maior que 100.

let Num1 = parseInt ( prompt ( 'Numero 1: ' ) );
let Num2 = parseInt ( prompt ( 'Numero 2: ' ) );

let soma = Num1 + Num2;

if ( soma > 100 ) {
    alert ( soma + ' É maior do que 100!' );
}

else if ( soma == 100 ) {
    alert ( soma + ' É igual a 100!' );
}

else { 
    alert ( soma + ' É menor que 100!' );
}


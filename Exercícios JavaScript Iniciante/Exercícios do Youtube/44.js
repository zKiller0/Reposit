// Calculando um ano bissexto

/*
 Para definir se o ano é Bissexto é necessario comparar:

    1- Se o valor referente ao nao é multiplo de 4, mas não de 100 
    ao mesmo tempo ou multiplo 400.

    Para saber se um número é multuplo de outro, temos que verificar se
    a divisão tem resto igual a zero.

    Para calcular o resto da divisão em JavaScript usaremos
    o operador ( % ).

    X = 8 % 2 , em x será armazenado o resto da divisão de 8 por 2.

    Na comparação de ( 8 % 2 == 0 ) teremoso resultado true.

    Ja na comparação ( 9 % 2 == 0 ) teremos o resultado false.
*/


let ano = parseInt ( prompt ( 'Digite um ano: ' ) );

if ( ( ano % 4 == 0 && ano % 100 != 0 )   || ano % 400 == 0 ) {
    alert ( `${ano} é bissexto` );
}

else {
    alert ( `${ano} não é bissexto` );
}
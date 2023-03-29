// Contagem de dígitos do usuário

/* 
  1 - Receber o valor do usuário.

  2 - Criar uma váriavel para contar os dígitos.

  3 - Iniciar a repetição para dividir o N por 10
  até que N seja = 0.

  4 - Contar os dígitos atraves das repetições.

  5 - Mostrar quantidade de dígitos.

  */

let n = parseInt ( prompt ( 'Digite um número: ' ) );

let i = 0;

let aux = n;

// Condição de repetição
while ( n != 0 ) {

    n = parseInt ( n / 10 );

    i++;

}

alert ( `${aux} tem ${i} dígito(s).` );
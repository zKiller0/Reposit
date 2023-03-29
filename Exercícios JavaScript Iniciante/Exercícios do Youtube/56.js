// Média Válida

/* 
    1 - Receber dois números reais referentes 
    a duas notas do aluno.

    2 - Caluclar a média dessas notas.

    3 - Mostrar saída ,descartando valores inválidos.

*/

let nota1 , nota2 ;

// Validando a nota 1
do {
    nota1 = parseFloat ( prompt ( 'Digite a nota 1: ' ) );

} while ( nota1 < 0 || nota1 > 10 );

// Validando a nota 2
do {
    nota2 = parseFloat ( prompt ( 'Digite a nota 2: ' ) );

} while ( nota2 < 0 || nota2 > 10 );


// Calculando a Média 
let media = ( nota1 + nota2 ) / 2;

alert ( `Sua Média é ${media}` );

/*  Testanto outra possibilidade

let nota1 = parseFloat ( prompt ( 'Nota 1: ' ) );
let nota2 = parseFloat ( prompt ( 'Nota 2: ' ) );

while ( nota 1 < 0 || nota 2 < 0 || nota1 > 10 || nota2 < 10 ) {

    if ( nota1 < 0 || nota 1 > 10 ) {
            let nota1 = parseFloat ( prompt ( 'Nota 1: ' ) );
    } 

    else { 
        let nota2 = parseFloat ( prompt ( 'Nota 2: ' ) );
    }
}

let media = ( nota1 + nota2 ) / 2;

alert ( media );

*/
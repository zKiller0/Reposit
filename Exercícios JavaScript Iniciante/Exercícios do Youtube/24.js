// Média Ponderada com 4 notas

let nota1 = parseFloat ( prompt ( 'Nota 1: ' ) );
let nota2 = parseFloat ( prompt ( 'Nota 2: ' ) );
let nota3 = parseFloat ( prompt ( 'Nota 3: ' ) );
let nota4 = parseFloat ( prompt ( 'Nota 4: ' ) );

let media = ( ( nota1 * 1 ) + ( nota2 * 2 ) + ( nota3 * 4 ) + ( nota4 * 6 ) ) / ( 1 + 2 + 4 + 6 );

alert ( `Sua Média é = ${media.toFixed(2)}` );
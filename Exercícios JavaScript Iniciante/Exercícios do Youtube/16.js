// Operadores Aritiméticos
// Média Ponderada

let nota1 = parseFloat ( prompt ( 'Nota 1: ' ) );
let nota2 = parseFloat ( prompt ( 'Nota 2: ' ) );
let nota3 = parseFloat ( prompt ( 'Nota 3: ' ) );

let MediaPonderada = ( nota1 * 2 ) + ( nota2 * 3 ) + ( nota3 * 5 );

MediaPonderada = MediaPonderada / ( 2 + 3 + 5 );

alert ( 'Sua Média é : ' + MediaPonderada );
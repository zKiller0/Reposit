// Operadores Aritiméticos
// Questões Bom dia e Media ponderada

// let nome = prompt ( 'Qual é o seu nome?' );
// alert ( 'Bom dia ' + (nome) + '!' );

let nota1 = parseFloat ( prompt ( 'Nota 1: ' ) );
let nota2 = parseFloat ( prompt ( 'Nota 2: ' ) );
let nota3 = parseFloat ( prompt ( 'Nota 3: ' ) );

let mediaPonderada = ( nota1 * 2 ) + ( nota2 * 3 ) + ( nota3 * 5) ;

mediaPonderada = mediaPonderada / ( 2 + 3 + 5 );

alert ( 'Sua Média é ' + mediaPonderada );

// 01. Escreva um programa que pede o raio de um círculo, e em seguida exiba o perímetro e área do círculo.
// Para saber o valor do pi em JavaScript, use:
// Math.PI
// Pronto, terá o float com o valor do pi.

let raio = prompt ( 'Raio da circunferência: ' ); // Para poder inserir um valor, usamos Prompt
raio = parseFloat ( raio );

let comprimento = 2 * Math.PI * raio;
let area = Math.PI ** raio ;

document.write ( 'Comprimento da circunferência       = ' , comprimento , '<br' );
document.write ( 'Área da circunferência    = ' , area );

// parseFloat serve para convertrer o 'string' em numero decimal

// A média de 4 alunos

// Contador 
let c = 0;

// Repetição Condicional
while ( c < 4 ) {

    // Entradas
    let nota1 = parseFloat ( prompt ( 'Nota 1: ' ) );
    let nota2 = parseFloat ( prompt ( 'Nota 2: ' ) );

    // Calculo
    let media = ( nota1 + nota2 ) / 2;

    // Mostrando media
    alert ( media );

    // Incrementando
    c = c + 1;

}
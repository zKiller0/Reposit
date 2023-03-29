// Repetição Condicional

// Nota 1
let x = parseFloat ( prompt ( 'Digite a nota 1: ' ) );

// Verificando a nota < 0 e nota > 10 
while ( x < 0 || x > 10 ) {
    let x = parseFloat ( prompt ( 'Digite a nota 1: ' ) );
}

// Nota 2
let y = parseFloat ( prompt ( 'Digite a nota 2: ' ) );

// Verificando a nota 
while ( y < 0 || y > 10 ) {
    let y = parseFloat ( prompt ( 'Digite a nota 2: ' ) );
}

// Média 
let m = ( x + y ) / 2;

alert ( `Sua Média é ${m}` );


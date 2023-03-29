// Operações com Vetores

// Vetor
let B = [];

// Contador
for ( e = 0; e < 3; e++ ) {

    B [ e ] = Number ( prompt ( 'Digite um número: ' ) )
}

alert ( `B = ${B}` );

// Vetor
let C = [];

// Contador
for ( f = 0; f < 3; f++ ) {

    C [ f ] = Number ( prompt ( 'Digite outro número: ' ) );
}

alert ( `C = ${C}` );

// Vetor
let D = [];

// Contador
for ( g = 0; g < 3; g++ ) {

    D [ g ] = Number ( prompt ( 'Digite: ' ) );
}

alert ( `D = ${D}` );
// Vetor 
let A = [];

// Contador
for ( h = 0; h < 3; h++ ) {

    A [ h ] = B [ h ] + C [ h ] - ( 5 * D [ h ] );
}

alert ( `A = [ ${A} ]` )
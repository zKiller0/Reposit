// Separando um Vetor

// Vetor
let A = [];

// Contador 
for ( i = 0; i < 20; i ++ ) {

    A [ i ] = parseInt ( prompt ( 'Digite um número: ' ) );
}

// Vetores
let Impares = [];
let Pares = [];

let j = 0 , k = 0;

// Contador 
for ( h = 0; h < 20; h ++ ) {

    if ( A [ h ] % 2 == 0 ) {
        Pares [ j ] = A [ h ];
        j++;
    }

    else {
        Impares [ k ] = A [ h ];
        k++;
    }
}

alert ( `Pares = ${Pares} \nÍmapares = ${Impares}` );
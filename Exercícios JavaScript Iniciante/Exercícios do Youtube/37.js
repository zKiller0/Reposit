// Separando um vetor 

let numeros = []; // Vetor
let pares = []; // Vetor
let impares = []; // Vetor

let CI = 0; // Contador de Ímpares
let CP = 0; // Contador de Pares

// Número de vezes que vai ser repetido ( 20 )
for ( i = 0; i < 20; i++ ) {
    numeros [i] = parseInt ( prompt ( 'Digite um número' ) );
}

for ( j = 0; j < 20; j++ ) {
    
            // Identificando se é Par
        if ( numeros[j] % 2 == 0 ) { 
            pares [ CP ] = numeros [j];
            CP++; // Incrementação
        } 
        
        else {
            impares [ CI ] = numeros [j];
            CI++; // Incrementação
        }
}

alert ( `Pares: ${pares}
Impares: ${impares}` );


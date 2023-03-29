// Crescimento Populacional ( Lógica de Programação )


// Valores que representam a população das cidades.
let cA = parseInt ( prompt ( 'População da cidade A: ' ) );
let cB = parseInt ( prompt ( 'População da cidade B: ' ) );

// Cidade A - cresce 3,5% ao ano.

// Cidade B - cresce 15 ao ano.

// Calculo - Em quantos anos a população da cidade A será
// maior que a da cidade B.

let anos=0;

while ( cA < cB ) {
    
    let popA = ( 3.5 * cA ) / 100;
    let popB = ( 1 * cB ) / 100;

    cA = cA + popA;  // Variável somatória.
    cB = cB + popB;

    anos = anos + 1;

}

// Considerando 7000 ( cA ) ; 20000 ( cB ).

alert ( `Foram necesários ${anos} para a população de A ultrapassar à populção de B` );
// Medidor de Velocidade

// Velocidade max de 70km
// A cada 5km acima do limite, você ganha 1 ponto na carteira
// Math.Floor( )
// Caso pontos > que 12 -> 'Carteira Suspensa'

verificarVelocidade(85);

function verificarVelocidade ( velocidade ) {

    const velocidadeMaxima = 70;

    const KmPorPonto = 5;

        if ( velocidade <= velocidadeMaxima )
           console.log ( 'Ok' );

        else {
            const pontos = Math.floor ( ( ( velocidade - velocidadeMaxima ) / KmPorPonto ) );

            if ( pontos >= 12 )
                 console.log ( 'Carteira Suspensa!' );

            else 
                 console.log ( 'Pontos' , pontos );
        }

}
// Para um jogo, precisamos saber se um personagem morreu ou não depois de sofrer um ataque. 
// Faça uma função que receba 2 parâmetros, 'dano' e 'saude'. A função deve retornar '1' 
// se o dano para matar o personagem (ou seja, deixar sua saúde menor ou igual a zero) e '0' caso contrário.

function GameOver ( dano , saude ) {

    if ( dano >= saude ) { 
        alert ( 'Você está morto!' ) ;
    }

    else { 
        alert ( 'Você está vivo!' ) };
}
   

// Não exibe na tela o resultado
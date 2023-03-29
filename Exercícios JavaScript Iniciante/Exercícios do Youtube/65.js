// Tempo de vida de um matérial radioativo

/*
   1 - Receber um valor inteiro.

   2 - Tempo 1 / 2 vida = 50 segundos.

   3 - Finalidade : Atingir 0.5 gramas ou menos.

   4 - Resultado : Tempo necessário em minutos e segundos para
        atingir a finalidade.

    Condição de parada - Massa <= 0.5 g
    Condição de repetição - Massa > 0.5 g
*/

let massa = parseInt ( prompt ( 'Massa: ' ) );

let tempo = 0;

// Condição de repetição
while ( massa > 0.5 ) {

    massa = massa / 2; // Calculo da massa
    tempo = tempo + 50; // Atualizando o valor da váriavel tempo

    alert ( `Tempo ${tempo} \nMassa ${massa}`);
}

let min = parseInt ( tempo / 60 );

let seg = tempo % 60;

alert ( `${min} minutos e ${seg} segundos` );
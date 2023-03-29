// Mostrar o dia da semana

// Recebe o dia
let dia = prompt ( 'Digite o dia: ' );

// Verifica se o dia é válido
if ( dia > 0 && dia <= 365 ) {
    // Verificar o dia da semana
    if ( dia % 7 == 1 ) {
        alert ( 'Sexta-Feira' );
    }
    
    else  {
        if ( dia % 7 == 2 ) {
            alert ( 'Sábado' );
        }

         else {
            if ( dia % 7 == 3 ) {
                alert ( 'Domingo' );
            } 

             else {
                if ( dia % 7 == 4 ) {
                    alert ( 'Segunda-Feira' );
                }  
                
                  else {
                    if ( dia % 7 == 5 ) {
                        alert ( 'Terça-Feira' );
                    }

                      else {
                        if ( dia % 7 == 6 ) {
                            alert ( 'Quarta-Feira' );
                        } 

                          else {
                            if ( dia % 7 == 0 ) {
                                alert ( 'Quinta-Feira' );
                            }

                          }
                      }
                  }
             }
        }
    }
}

else {
    // Saída para dias maiores que 365 dias
    alert ( 'O ano de 2023 tem apenas 365 dias' );
}
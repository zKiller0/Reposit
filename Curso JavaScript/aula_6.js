// Função ( Function ) , realiza o controle dos dados

// Nomear a função = verbo + Substantivo
let corSite = 'Azul'

                 // Parametros
function resetarCor ( cor, tonalidade ) /* variável (cor) */ { 
    corSite = cor + ' ' + tonalidade; /* Argumentos */
};               // Espaço 

console.log (corSite);

resetarCor ( "vermelho","escuro" ); // string vermelho
console.log (corSite);
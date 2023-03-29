// Tipos de Função
// Primeira: Realizar uma tarefa, enão devolve nada

function dizerNome () {
    console.log ( "Italo" );
}

dizerNome ();

// Faz um calculo pu operação e retorna alog
function multiplicarPorDois (valor) {
    return valor* 2;
}

console.log ( multiplicarPorDois (5) );

let resultado = multiplicarPorDois;

console.log ( resultado );
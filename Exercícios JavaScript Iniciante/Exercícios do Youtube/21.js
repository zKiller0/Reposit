// Trocando valores entre duas variáveis

let a = parseInt ( prompt ( 'Digite um número: ' ) );
let b = parseInt ( prompt ( 'Digite outro númeo: ' ) );

alert ( 'Inicial ' + a + " " + b );

let aux = a;

a = b;
b = aux;

alert ( 'Final ' + a + " " + b );w
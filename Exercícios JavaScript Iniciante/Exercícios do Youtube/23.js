// Transformando horas em dias 

// Solicitar número em horas pro usuário
let horas = parseInt ( prompt ( 'Digite um número de horas: ' ) );
// Guardar o número de horas

/* EX:
65 horas
65 horas -- x dias 
24 horas -- 1 dia

24x = 65
x = 65 / 24
x = 2.70

número em dias = número em horas / 24 
resto da divisão = horas;
*/

let dias = parseInt ( horas / 24 );
let resta_horas = ( horas % 24 );

// Mostrar pro usuário

alert ( `${horas} equivale à ${dias} dias e ${resta_horas} horas` );


// 03. Agora faça o contrário. Você fornece a temperatura em graus Fahrenheit, seu programa deve converter para Celsius e exibir na tela a temperatura em graus Celsius.

let Fahrenheit = parseFloat ( prompt ( 'Temperatura em graus Fahrenheit: ' ) );

let Celsius = 5 * ( Fahrenheit - 32 ) / 9;

document.write ( 'Temperatura em Celsius = ' , Celsius );

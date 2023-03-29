// 02. Você está no Brasil, e para temperatura usamos o grau Celsius.
// Porém, quando você for contrato para trabalhar como programador Python no exterior, deverá usar graus Fahrenheit.
// A fórmula da conversão é a seguinte:
// Ou seja, você fornece a temperatura em graus Celsius, e seu script JS faz a conversão para graus Fahrenheit.

let Celsius = parseFloat ( prompt ( 'Temperatura em graus Celsius: ' ) );

let Fahrenheit = ( 9 * Celsius / 5 ) + 32 ;

document.write ( 'Temperatura em graus Fahrenheit = ' , Fahrenheit );

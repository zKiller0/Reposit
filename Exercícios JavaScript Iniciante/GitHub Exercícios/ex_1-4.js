// Faça um programa que leia do usuário uma temperatura em Fahrenheit, 
// converta-a para graus Celsius e escreva o novo valor na tela. A fórmula de conversão de 
// Fahrenheit (F) para Celsius é C = ( ( F - 32 ) * 5 ) / 9. Exemplo: 100 Fahrenheit = 37,77 Celsius.

let Fahrenheit = Number ( prompt ( 'Ensira a temperatura em Fah: ' ) );

Celsius = ( ( Fahrenheit - 32 ) * 5 ) / 9;

document.write ( 'A temperatura em Celsius e: ' , Celsius );

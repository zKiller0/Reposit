// 04. Um novo modelo de carro, super econômico foi lançado.
// Ele faz 20 km com 1 litro de combustível.
// Cada litro de combustível custa R$ 5,00.

// Faça um programa que pergunte ao usuário quanto de dinheiro ele tem e 
// em seguida diga quantos litros de combustível ele pode comprar e quantos kilometros
// o carro consegue andar com este tanto de combustível.


let dinheiro = parseFloat ( prompt ( 'Quanto dinheiro você tem ? ' ) );

let combustivel = parseFloat ( dinheiro / 5 );

let quilometros = parseFloat ( combustivel * 20 );

document.write ( `com ${ dinheiro } reais, você compra ${ combustivel } litros de combustível e você consegue andar ${ quilometros } km` );
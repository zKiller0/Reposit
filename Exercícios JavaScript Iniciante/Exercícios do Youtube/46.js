// Como  calcular o preço de um produto

let Cp = parseInt ( prompt ( 'Digite o código do produto: ' ) );
let Qt = parseInt ( prompt ( 'Digite a quantidade do produto: ' ) );
let preco = 0;

// Switch Case
switch ( Cp ) { 
    case 1 : 
        preco = 2.00 * Qt;
        break;
    
    case 2 : 
        preco = 2.50 * Qt;
        break;

    case 3 : 
        preco = 3.00 * Qt;
        break;
    
    case 4 : 
        preco = 4.00 * Qt;
        break;

    case 5 :
        preco = 3.00 * Qt;
        break;
}

alert ( `O total a pagar é R$${preco}`)
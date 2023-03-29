// Lucro deum comerciante

// 1 - Receber o valor do produto

// 2 - Se o valor for menor ou igual a 20
//      calcular o lucro 45% do valor do produto

// 3 - Valor final do produto = lucro + valor do produto

// 4 - Mostrar o resultado


let valor = Number ( prompt ( 'Digite o valor do produto: ' ) );

let lucro ;

if ( valor <= 20 ) {
    lucro = valor * ( 45 / 100 );
}

else {
    lucro = valor * ( 30 / 100 );
}

let valor_final = valor + lucro;

console.log ( valor_final )
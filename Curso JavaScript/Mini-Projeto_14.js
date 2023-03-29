// Faixa de Preço

let faixaDePreco = [ 
    { tooltip : 'Até R$700', minimo: 0, max: 700 },
    { tooltip : 'De R$700 a R$1000', minimo: 700, max: 1000 },
    { tooltip : 'R$1000 aou mais', minimo: 1000, max: 9999 }
];

// Segunda Forma : Fuctory Function

function criaFaixaPreco ( tooltip, minimo, max ) {
    return {
        tooltip,
        minimo,
        max
    }
}

let faixas2 = [ 
    criaFaixaPreco ( 'a',1,100 ),
    criaFaixaPreco ( 'a',100,1000 ),
    criaFaixaPreco ( 'a',1000,10000 ),
]

// Terceira Forma ( Constructor Function )
function FaixaPreco ( tooltip, minimo , max ) {

    this.tooltip = tooltip,
    this.minimo = minimo,
    this.max = max

}

let faixas3 = [ 
    new FaixaPreco ( 'x',10,20),
    new FaixaPreco ( 'y',20,30),
    new FaixaPreco ( 'z',30,40)
]

console.log ( faixaDePreco );
console.log ( faixas2 );
console.log ( faixas3 );


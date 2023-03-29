// Encontrando Elementtos : Tipos de Referência

const marcas = [ 
     { id:1 , nome : 'a' },
     { id:2 , nome : 'b' },
     { id:3 , nome : 'c' },
     { id:4 , nome : 'd' },
     { id:5 , nome : 'e' }
]

const marca = marcas.find ( function ( marca ) { 
    return marca.nome === 'a';

} ) ;

console.log ( marca );



// Enconte o String
const filme = {
    título : 'Avangers',
    ano : 2016,
    diretor : 'Robert',
    Herói : 'Hulk'
}

exibirPropriedades ( filme );

function exibirPropriedades ( obj ) { 
    for ( prop in obj )
    
    if ( typeof obj[prop] === 'string' )
         console.log ( prop, obj[prop] )
       
}
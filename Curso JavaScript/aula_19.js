// For..In

const pessoa = {
    nome : 'Italo', 
    idade : 18      // value
}  

// key-value

for ( let chave in pessoa ) {
    console.log ( chave,pessoa ['nome'] );
}


const cores = [ 'Vermelho','Azul','Verde' ]

for ( let indice in cores ) {
    console.log ( indice,cores [indice] ) // Acessando as propriedades
}
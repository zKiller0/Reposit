// Montador de Endereço

// Criar um objeto endereço que contém:
// Rua
// Cidade 
// CEP
// exibirEndereco ( endereco )

//Usar Let se ele sofrer alterações, se  não, usar const

let endereco = {
    rua : 'Joaquim Q. Assis',
    cidade : 'São Domingo',
    cep : '58853-00'
};

function exibirEndereco ( endereco ) {
    for ( let chave in endereco )
    console.log ( chave, endereco[chave] );
}

exibirEndereco ( endereco ) ;
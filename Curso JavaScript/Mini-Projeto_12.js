// Encontre a Igualdade ( Igualdade de Objetos )

function Endereco ( rua , cidade , cep ) {
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep

}

const endereco1 = new Endereco ( 'joaquim Q. Assis', 'São Domingos', '58853-000' );

const endereco2 = new Endereco ( 'Sítio Formiga', 'Pombal', '58835-000' );

function saoIguais ( endereco1, endereco2 ) {
    // Compara se as propriedades são iguais
    return endereco1.rua === endereco2.rua &&
            endereco1.ciade === endereco1.cidade && 
             endereco1.cep === endereco2.cep
}

console.log(saoIguais ( endereco1, endereco2 ) );

function temEnderecoMemoriaIguais ( endereco1, endereco2 ) {
    // Comparando se a referencia do objeto aponta para o mesmo local na memória
 return endereco1 === endereco2
}

console.log ( temEnderecoMemoriaIguais ( endereco1, endereco2 ) );

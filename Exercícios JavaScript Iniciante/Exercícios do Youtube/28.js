// Identificando as categorias da natação 

let idade = parseInt ( prompt ( 'Digite sua idade: ' ) );

if ( idade >= 5 && idade <= 7 ) {
    alert ( 'Você está na categoria Júnior' );
}

else if ( idade >= 8 && idade <= 12) {
    alert ( 'Você está na categoria Infantil' );
}

else if ( idade >= 13 && idade <= 18 ) {
    alert ( 'Você está na categoria Pré' );
}

else { 
    alert ( 'Sua idade não está classificada nas categorias anteriores' );
}

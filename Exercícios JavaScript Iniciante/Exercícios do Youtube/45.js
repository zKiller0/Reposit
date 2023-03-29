// Como encontrar um ponto no plano X Y

let X = parseFloat ( prompt ( 'Digite a coordenada X: ' ) );
let Y = parseFloat ( prompt ( 'Digite a ordenada Y: ' ) );

if ( X == 0 && Y == 0 ) {
    alert ( 'Ponto de origem' );
}

else if ( X != 0 && Y == 0 ) {
    alert ( 'Eixo X' );
}

else if ( X == 0 && Y != 0 ) {
    alert ( 'Eixo Y' );
}

else if ( X > 0 && Y > 0 ) {
    alert ( 'Q1' );
}

else if ( X < 0 && Y > 0 ) {
    alert ( 'Q2' );
}

else if ( X < 0 && Y < 0 ) {
    alert ( 'Q3' );
}

else {
    alert ( 'Q4 ');
}
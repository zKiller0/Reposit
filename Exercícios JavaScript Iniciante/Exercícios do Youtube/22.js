// Troca de dígitos de números

let n1 = parseInt ( prompt ( 'Digite um número' ) );

let c = parseInt ( n1 / 100 );
let aux = parseInt ( n1 % 100 );
let d = parseInt ( aux / 10 );
let u = parseInt ( aux % 10 );

alert ( `${u}${d}${c}` );





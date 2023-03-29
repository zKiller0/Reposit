// Convertendo pés , jardas e milhas

// Pés = 0.3048 mestros
// Jardas = 0.9144 metros
// milhas = 1604.38 metros

let metros = parseFloat ( prompt ( 'Digite uma medida em metros: ' ) );

let p = 0.3048;
let j = 0.9144;
let m = 1604.38;

let pes = ( metros / p );
let jardas = ( metros / j );
let milhas = ( metros / m );

alert ( `${metros} metros em pés é: ${pes}
${metros} em jardas é: ${jardas}
${metros} em milhas é: ${milhas}` );
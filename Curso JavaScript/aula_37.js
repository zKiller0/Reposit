// Operador Spread

const alfa1 = [ 'a' , 'b' , 'c' ];
const alfa2 = [ 'd' , 'e' , 'f' ];

const combinado = [ ... alfa1,'alfa', ... alfa2,'beta' ];
console.log ( combinado );


const clonado = [ ... combinado ];
console.log ( clonado );



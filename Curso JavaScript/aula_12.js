// Operadores Lógicos
// São usados para tomar decisões em condições multiplas

// Operador Lógico e (&&)
// Retorna TRUE se os dois operadores forem true

// console.log ( true && true );

// Operadores de Atribuição

 /* let maiorDeIdade = false;
let possuiCarteira = true;
let podeAplicar = maiorDeIdade && possuiCarteira */

// Operador Lógico ou (||)
// Retornar true se um dos operadores for true


/* let maiorDeIdade = false;
let possuiCarteira = true;
let podeAplicar = maiorDeIdade || possuiCarteira */

// Operador Lógico NOT (!)

let maiorDeIdade = false;
let possuiCarteira = true;
let podeAplicar = maiorDeIdade || possuiCarteira

console.log ( 'Pode aplicar ' , podeAplicar)

let canditadoRecusado = !podeAplicar;

console.log ( 'Canditado Recusado ' , canditadoRecusado )

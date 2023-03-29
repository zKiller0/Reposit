// Fizz Buzz
// Ele vai comparar alguns valores e ter um retorno baseado no valor de entrada

// Divisivel por 3 -> Fizz 
// Divisivel por 5 -> Buzz
// Divisivel por 3 e 5 -> FizzBuzz
// Não é divisivel por 3 ou 5 -> Eentrada
// Se não é um número -> 'Não é um número'

const resultado = fizzBuzz(16);

console.log ( resultado );

function fizzBuzz ( entrada ) { 

    if ( entrada % 3 === 0 && entrada % 5 === 0)
       return 'FizzBuzz';
    if ( typeof entrada !== 'number' )
       return 'Não é um número';
    if ( entrada % 3 === 0 )
       return 'Fizz';
    if ( entrada % 5 === 0 )
       return 'Buzz';
    
    return entrada;

}

// Calculando a exponencial de X

/*
  Criar um função que retorna o valor da exponencial
  para qualquer x informando.

  Função pronta:
    Math.exp ( x )

*/

function fat ( x ) {

    let fatorial = x;

    for ( i = 1; i < x; i++ ) {
        fatorial = ( x - i );
    }

    return fatorial;
}

function exp ( x , n ) {

    let aprox_exp = 1;

    for ( i = 1; i <= n; i++ ) {
            aprox_exp = aprox_exp + ( x ** i ) / fat ( i ) 
    }

    return aprox_exp;

}


// Entradas

let x = Number ( prompt ( 'Digite um número: ' ) );

let n = 5;

let exp_X = Math.exp ( x ); // Calculo Analítico

alert ( `Exponencial = ${exp_X}`);

let exp_A = exp ( x , n ); // Parametros

alert ( `Exponencial ${x} = ${exp_A}` );


// REVISAR ESSA PARTE TEÒRICA
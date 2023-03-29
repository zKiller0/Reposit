// Template String usam back-tick (``) em vez de
// aspas ('') para definir uma string

let texto = `A persistência é o caminho do êxito. 
 - Charles Chaplin`;

 console.log ( texto );
 alert ( texto );

 // String

 let primeiro_nome = 'Italo';
 let segundo_nome = 'José';

 console.log ( primeiro_nome + " " + segundo_nome )
 alert ( primeiro_nome + " " + segundo_nome );

// Concatenação de String

let nome_completo = `${primeiro_nome} ${segundo_nome}`;
alert ( nome_completo );

// Interpolação de String ${variavel}
 
let nome_completo2 = primeiro_nome + " " + segundo_nome;

// Faça um programa que mostra o resultado das
// seguintes operações 10 + 15 , 100 * 50 e 362 / 4

alert ( 'O valor das operações respectivamente são :' + " " + ( 10 + 15 ) + " " + 100 * 50 + " " + 362 / 4 );

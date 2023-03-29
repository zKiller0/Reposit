// Segurança Virtual

function VerificarEntrada ( ) {
    NomeConvidado = document.getElementById ( 'nome' ).value;
     ConvidadosCristian = [ 'Amanda', 'Sabrina', 'Rafael', 'Jonas', 'Carol', 'Jhonatan' ]
     if ( ConvidadosCristian.includes (NomeConvidado) ) {
        document.getElementById ('PermissaoParaEntrada').innerText = 
        'Você pode entrar!'
     } else { 
        document.getElementById ('PermissaoParaEntrada').innerText = 
    'Você não pode entrar!!'  }
}
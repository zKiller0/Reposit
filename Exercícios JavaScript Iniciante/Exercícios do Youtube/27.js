// Como calcular o IMC

let peso = parseFloat ( prompt ( 'Digite seu peso: ' ) );
let altura = parseFloat ( prompt ( 'Digite sua altura: ' ) );

let IMC = peso / ( altura * altura );

if ( IMC < 18.5 ) {
    alert ( `O seu IMC é: ${IMC}, então você está abaixo do peso.` );
}

else if ( IMC >= 18.5 && IMC <= 25 ) { 
    alert ( `O seu IMC é ${IMC}, então você está com o peso normal.` );
}

else if ( IMC >= 25 && IMC < 30 ) {
    alert ( `O seu IMC é: ${IMC}, então você está sobrepeso.` );
}

else {
    alert ( `O seu IMC é: ${IMC}, então você está obeso.` );
}
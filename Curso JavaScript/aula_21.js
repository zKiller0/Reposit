// Factory Functions ( Função de Fábrica )

const celular = {
    marca : 'ASUS',
    tamanhoTela : {
        vertical : 155,
        horizontal : 75
    },
    bateria : 5000,
    
    ligar : function () {
        console.log ( 'Fazendo ligação...' )
    }

}

function criarCelular ( marca, tamanhoTela, bateria ) {
    return  {
        marca ,
        tamanhoTela ,
        bateria,
        
        ligar () {
            console.log ( 'Fazendo ligação...' )
        }
    
    }

}

const  celular1 = criarCelular ( 'Zenfone', 5.5, 5000 );
console.log ( celular1 )
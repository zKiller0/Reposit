// Constructor Functions


// camel Case - umDoisTresQuatro
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

// Pascal Case - UmDoisTresQuatro
function Celular ( marcaCelular, tamanhoTela, bateria ) {
        this.marcaCelular = marcaCelular ,
        this.tamanhoTela = this.tamanhoTela ,
        this.bateria = this.bateria ,
        this.ligar = function () {
            console.log ( 'Fazendo ligação...' );
        }       
}

const celular = new Celular ( 'IPHONE', 5.5, 5000 );
console.log ( celular );
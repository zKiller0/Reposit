let pessoa = {nome:'Vitor',
sexo:'masculino',
peso:70.1,
engordar(p){ // Função
        console.log('Engordou!')
        this.peso += p
    }
}

pessoa.engordar(4) // Chamada da função
console.log (`${pessoa.nome} pesa ${pessoa.peso}Kg`)
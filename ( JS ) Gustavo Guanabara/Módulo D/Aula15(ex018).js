let valores = [ 3 , 5 , 7 , 9 , 4 ]

/* for ( let pos = 0; pos < valores.length; pos++ ){
    
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

// Forma mais resumida de fazer

for ( let pos in valores ) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}


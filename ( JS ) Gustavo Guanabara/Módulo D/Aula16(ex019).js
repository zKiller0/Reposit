function parImpar(n) {
    if ( n % 2 == 0 ) {
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}

let res = parImpar(6)
console.log(`O resultado é ${res}`)
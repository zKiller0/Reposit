/* let x = function (y) {
    return y * 2 
}

console.log (`O resultado é ${x(3)}`) */

function fatorial (x) {
    let fat = 1
    for ( let a = x; a > 1; a-- ){
    fat *= a
    }
    return fat 
}


console.log(`O resultado é ${fatorial(5)}`)
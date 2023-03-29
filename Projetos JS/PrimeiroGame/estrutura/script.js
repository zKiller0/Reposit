// Constante para manipular o Sonic
const sonic = document.querySelector('.sonic')

// Constante para manipular o Eggman
const eggman = document.querySelector('.eggman')

// Manipular o Fundo
const fundo = document.querySelector('.fundo')

// Função de Pulo
const jump = () => {
    sonic.classList.add('jump')
    sonic.src = "../imgs/Sonic-Jump.gif"

    // Responsável por executar e tempo que dura a execução
    setTimeout( () => {
        sonic.classList.remove('jump')    
        sonic.src = "../imgs/Sonic.gif"
    } , 900 )
}

// Constante para
const loop = setInterval(() => {
    const eggmanPosition = eggman.offsetLeft
    const sonicPosition = +window.
    getComputedStyle(sonic).
    bottom.replace('px','')

    // Ações de batida e passagem
    if (eggmanPosition < 110 && eggmanPosition > 0 && sonicPosition < 220) {
        
        eggman.style.animation = 'none'
        eggman.style.left = `${eggmanPosition}px`

        sonic.style.animation = 'none'
        sonic.src = '../imgs/Sonic-Loss.gif'
        sonic.style.width = '240px'

        fundo.src = '../imgs/GameoverSMB-1.png'
    }

}, 10)

// Evento de pulo
document.addEventListener('click', jump)


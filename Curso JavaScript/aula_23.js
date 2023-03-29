// Natureza Dinâmica de Objetos

const mouse = {
    cor : 'White',
    marca : 'Riot'
}
mouse.velocidade = 6000;
mouse.TrocarDPi = function () {
    console.log ( 'Mudando DPI...' )
}
delete mouse.velocidade
delete mouse.TrocarDPi
console.log ( mouse );
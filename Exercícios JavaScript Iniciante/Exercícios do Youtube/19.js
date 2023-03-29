// Custo ao consumidor de um carro novo

// Passo 1: Solocitar o preço de fábrica
let pf = parseFloat ( prompt ( 'Digite o preço de fábrica do veículo: ' ) );

// passo 2 : Solicitar o percentual de lucro
let pLucro = parseInt ( prompt ( 'Digite o percentual e lucro obito: ') );

// passo 3 : Solicitar o percentual de imposto
let pImposto = parseInt ( prompt ( 'Digite o percentual de imposto: ' ) );

// passo 4 : Calcular o total de lucro em cima do preço de fábrica
let lucro = pf * ( pLucro / 100 );

// passo 5 : Calcular o total de impostos em cima do preço de fábrica
let imposto = pf * ( pImposto / 100 );

// passo 6:  Calcular o preço final do carro
let Preco_Final = pf + lucro + imposto;

// passo 7 : Mostrar o resultado
alert ( `Preço de fábrica: ${pf} 
Percentual de Lucro ${lucro}
Percentual de Imposto: ${imposto}
Valor final do carro: ${Preco_Final}
`  );


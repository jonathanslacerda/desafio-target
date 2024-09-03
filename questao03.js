// Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

const dataBase = require('./dados')

const calculoMedia = (dataBase) => {
    let mediaSemZero = []
    let soma = 0;
    let media = 0;
    let count = 0;

    for ( let valores of dataBase) {
        if (valores.valor !== 0) {
            mediaSemZero.push(valores)
        }
    }

    for (let numero of mediaSemZero) {
        soma += numero.valor;
    }

    media = soma / mediaSemZero.length

    console.log(`Média de faturamento - R$ ${Math.round(media)}`)

    for (let valores of dataBase) {
        
        if(valores.valor > media) {
            count++
        }

    }

    console.log(`Número de dias no mês em que o valor de faturamento diário foi superior à média mensal é de ${count} dias`)
}

calculoMedia(dataBase)


const menorValor = (dataBase) => {
    
    let menor = dataBase[0]

    for (let valores of dataBase) {
        if (valores.valor < menor.valor) {
            menor = valores;
        }
    }

    console.log(`O maior valor de faturamento ocorrido em um dia do mês foi de R$ ${Math.round(menor.valor)}.`);
   
}

menorValor(dataBase)

const maiorValor = (dataBase) => {

    let maior = dataBase[0]

    for (let valores of dataBase) {
        if (valores.valor > maior.valor) {
            maior = valores;
        }
    }

    console.log(`O maior valor de faturamento ocorrido em um dia do mês foi de R$ ${Math.round(maior.valor)}.`);
}

maiorValor(dataBase)



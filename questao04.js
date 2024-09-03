// Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53
// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora. 


const dadosFaturamento = [
    {
        estado: "SP",
        faturamento: 67836.43
    },
    {
        estado: "RJ",
        faturamento: 36678.66
    },
    {
        estado: "MG",
        faturamento: 29229.88
    },
    {
        estado: "MG",
        faturamento: 27165.48
    },
    {
        estado: "OUTROS",
        faturamento: 19849.53
    },
]

const repPercentual = (dados) => {
    let soma = 0;

    for (let valor of dados) {
        soma += valor.faturamento;
    }

    dados.forEach(element => {
        element.percentual = ((element.faturamento / soma) * 100).toFixed(2);
    });

    console.log(dados)

}

repPercentual(dadosFaturamento);
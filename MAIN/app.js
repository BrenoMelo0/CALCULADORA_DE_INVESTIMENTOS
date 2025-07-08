//Preço Teto = R$ 2,00 / 0,06 = R$ 33,33. 

function calcularPrecoTeto() {
    const taxaEsperada = 0.06;
    let dividendYield = document.getElementById("dividendYield").value;
    let precoTeto = dividendYield / taxaEsperada;
    document.getElementById("precoTeto").innerText = " O preço teto para este dividendo: R$" + precoTeto;
    console.log(precoTeto);
}


function calcularPrecoTeto() {
    const taxaEsperada = 0.06;
    let dividendYield = document.getElementById("dividendYield").value;
    let precoTeto = dividendYield / taxaEsperada;
    document.getElementById("precoTeto").innerText = " O preço teto para este dividendo: R$" + precoTeto;
    console.log(precoTeto);
}

// Ativando a função ao pressionar Enter no input
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("dividendYield").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            calcularPrecoTeto();
        }
    });
});
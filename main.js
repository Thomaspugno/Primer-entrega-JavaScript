document.addEventListener("DOMContentLoaded", function() {
    const convertButton = document.getElementById("convertButton");
    const resultElement = document.getElementById("result");

    convertButton.addEventListener("click", function() {
        const amount = parseFloat(document.getElementById("amount").value);
        const fromCurrency = document.getElementById("fromCurrency").value;
        const toCurrency = document.getElementById("toCurrency").value;

        let exchangeRate;

        // calcular la tasa de cambio según las monedas seleccionadas
        if (fromCurrency === "usd" && toCurrency === "eur") {
            exchangeRate = 0.85; // 1 USD = 0.85 EUR
        } else if (fromCurrency === "usd" && toCurrency === "gbp") {
            exchangeRate = 0.73; // 1 USD = 0.73 GBP
        } else if (fromCurrency === "eur" && toCurrency === "usd") {
            exchangeRate = 1.18; // 1 EUR = 1.18 USD
        } else if (fromCurrency === "eur" && toCurrency === "gbp") {
            exchangeRate = 0.86; // 1 EUR = 0.86 GBP
        } else if (fromCurrency === "gbp" && toCurrency === "usd") {
            exchangeRate = 1.37; // 1 GBP = 1.37 USD
        } else if (fromCurrency === "gbp" && toCurrency === "eur") {
            exchangeRate = 1.16; // 1 GBP = 1.16 EUR
        } else {
            exchangeRate = 1; // Si son las mismas monedas, la tasa de cambio es 1
        }

        // Calcular el monto convertido
        const convertedAmount = amount * exchangeRate;

        // Mostrar el resultado
        resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    });
});
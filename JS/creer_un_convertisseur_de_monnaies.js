function convert() {
    var amountInput = document.getElementById('amount');
    var fromSelect = document.getElementById('from');
    var toSelect = document.getElementById('to');
    var resultDiv = document.getElementById('result');
    
    var amount = parseFloat(amountInput.value);
    var fromCurrency = fromSelect.value;
    var toCurrency = toSelect.value;
    
    if (!isNaN(amount)) {
        var conversionRate = getConversionRate(fromCurrency, toCurrency);
        var convertedAmount = amount * conversionRate;
        resultDiv.innerHTML = amount + ' ' + fromCurrency + ' = ' + convertedAmount.toFixed(2) + ' ' + toCurrency;
    } else {
        resultDiv.innerHTML = 'Veuillez saisir un montant valide.';
    }
}

function getConversionRate(fromCurrency, toCurrency) {
    // Simulated conversion rates for demonstration purposes
    // These values should be fetched from an API in a real-world application
    var conversionRates = {
        'CAD_USD': 0.79,
        'USD_CAD': 1.27,
        'EUR_USD': 1.14,
        'USD_EUR': 0.88,
        'CAD_EUR': 0.68,
        'EUR_CAD': 1.47
    };
    
    var rateKey = fromCurrency + '_' + toCurrency;
    return conversionRates[rateKey];
}

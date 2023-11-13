document.addEventListener('DOMContentLoaded', function() {
    let convertButton = document.getElementById('convert');

    convertButton.addEventListener('click', function() {
        convertTemperature();
    });

    function convertTemperature() {
        let temperature = parseFloat(document.getElementById('temperature').value);
        let originalUnit = document.getElementById('unit').value;
        let convertToUnit = document.getElementById('convert-to').value;

        if (!isNaN(temperature)) {
            let convertedTemperature = convert(temperature, originalUnit, convertToUnit);
            displayResult(convertedTemperature, convertToUnit);
        } else {
            alert('Please enter a valid temperature.');
        }
    }

    function convert(temperature, fromUnit, toUnit) {
        if (fromUnit === toUnit) {
            return temperature;
        }

        if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
            return (temperature * 9/5) + 32;
        }

        if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
            return (temperature - 32) * 5/9;
        }
    }

    function displayResult(convertedTemperature, unit) {
        let resultElement = document.getElementById('result');
        resultElement.textContent = 'Converted Temperature: ' + convertedTemperature.toFixed(2) + ' ' + unit;
    }
});
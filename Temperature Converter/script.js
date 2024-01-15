function convertTemperature() {
    // Get input values
    var temperature = parseFloat(document.getElementById("temperature").value);
    var unit = document.getElementById("unit").value;
    var resultElement = document.getElementById("result");

    // Check the selected unit and perform conversion
    if (unit === "celsius") {
        resultElement.value = (temperature * 9 / 5) + 32 + " Fahrenheit";
    } else if (unit === "fahrenheit") {
        resultElement.value = ((temperature - 32) * 5 / 9).toFixed(2) + " Celsius";
    }
}

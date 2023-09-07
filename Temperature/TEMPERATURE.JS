function convertCelsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
  }
  document.addEventListener("DOMContentLoaded", function() {
    const celsiusInput = document.querySelector("input[name='celsius']");
    const fahrenheitOutput = document.querySelector("#fahrenheit");
    celsiusInput.addEventListener("input", function() {
      const celsius = parseFloat(celsiusInput.value);
      fahrenheitOutput.innerHTML = convertCelsiusToFahrenheit(celsius);
    });
  });
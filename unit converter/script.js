document.getElementById('convertBtn').addEventListener('click', function(event) {
  event.preventDefault();
  convertTemperature();
});

function convertTemperature() {
  const temperatureInput = document.getElementById('temperature').value.trim();
  const unitInput = document.getElementById('unit').value;
  const resultElement = document.getElementById('result');

  if (temperatureInput === '' || isNaN(temperatureInput)) {
    resultElement.textContent = 'Please enter a valid temperature';
    resultElement.style.color = 'black';
  } else {
    const temperature = parseFloat(temperatureInput);

    let result;
    let color;

    if (unitInput === 'celsius') {
      const convertedToFahrenheit = (temperature * 9 / 5) + 32;
      const convertedToKelvin = temperature + 273.15;

      result = `${temperature}°C = ${convertedToFahrenheit.toFixed(2)}°F = ${convertedToKelvin.toFixed(2)}K`;
    } else if (unitInput === 'fahrenheit') {
      const convertedToCelsius = (temperature - 32) * 5 / 9;
      const convertedToKelvin = (temperature + 459.67) * 5 / 9;

      result = `${temperature}°F = ${convertedToCelsius.toFixed(2)}°C = ${convertedToKelvin.toFixed(2)}K`;
    } else if (unitInput === 'kelvin') {
      const convertedToCelsius = temperature - 273.15;
      const convertedToFahrenheit = (temperature * 9 / 5) - 459.67;

      result = `${temperature}K = ${convertedToCelsius.toFixed(2)}°C = ${convertedToFahrenheit.toFixed(2)}°F`;
    }
    if (temperature >= 25) {
      color = 'orange';
    } else if (temperature <= 10) {
      color = 'blue';
    } else {
      color = 'black';
    }
    resultElement.textContent = result;
    resultElement.style.color = color;
  }
}

async function getWeather() {
    const city = document.getElementById("city").value;

    const url =
      `https://wttr.in/${city}?format=j1`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const temp =
          data.current_condition[0].temp_C;

        const humidity =
          data.current_condition[0].humidity;

        document.getElementById("weatherResult").innerHTML =
        `
        <h3>${city}</h3>
        <p>Temperature: ${temp} °C</p>
        <p>Humidity: ${humidity}%</p>
        `;
    }
    catch(error) {
        document.getElementById("weatherResult").innerHTML =
        "Error fetching weather data";
    }
}
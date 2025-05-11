
<script>
  import WeatherChart from '$lib/WeatherChart.svelte';
  import { supabase } from '$lib/supabaseClient';


  let city = '';
  let forecast = [];
  let avgTemp = 0;
  let avgHumidity = 0;

  async function getWeather() {
  const apiKey = '4aab4732aedc96604ff0e4e7d8588274'; // Replace with your API key
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  const res = await fetch(url);
  const data = await res.json();
  if (!data.list) {
  alert('City not found or error with API');
  return;
}

forecast = data.list.filter((_, index) => index % 8 === 0);


  forecast = data.list.filter((_, index) => index % 8 === 0);

  const temps = forecast.map(f => f.main.temp);
  const humidities = forecast.map(f => f.main.humidity);
  avgTemp = (temps.reduce((a, b) => a + b, 0) / temps.length).toFixed(1);
  avgHumidity = (humidities.reduce((a, b) => a + b, 0) / temps.length).toFixed(1);

  // ✅ Save to Supabase
  await supabase.from('search_history').insert([
    {
      city_name: city,
      forecast_data: forecast
    }
  ]);
}

</script>

<h1>🌤️ 5-Day Weather Forecast</h1>

<input placeholder="Enter city" bind:value={city} />
<button on:click={getWeather}>Get Forecast</button>

{#if forecast.length}
  <h2>Average Temp: {avgTemp}°C | Avg Humidity: {avgHumidity}%</h2>
  <h2>5-Day Temperature & Humidity Chart</h2>
  <div style="max-width: 600px;">
    <WeatherChart
      labels={forecast.map(day => day.dt_txt.split(' ')[0])}
      temperatures={forecast.map(day => day.main.temp)}
      humidities={forecast.map(day => day.main.humidity)} />
  </div>
{/if}

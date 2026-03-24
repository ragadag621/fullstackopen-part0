const CountryDetail = ({ country, weather }) => {
  const currencies = country.currencies 
    ? Object.values(country.currencies).map(c => `${c.name} (${c.symbol})`).join(", ")
    : "Not available"

  return (
    <div className="country-card">
      <img src={country.flags.png} alt="Flag" className="flag-img" />
      <h1>{country.name.common}</h1>
      
      <div className="info-grid">
        <p><strong>Capital:</strong> {country.capital?.[0]}</p>
        <p><strong>Area:</strong> {country.area.toLocaleString()} km²</p>
        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
        <p><strong>Currencies:</strong> {currencies}</p>
      </div>

      <h3>Languages:</h3>
      <ul className="languages-list">
        {Object.values(country.languages || {}).map(lang => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>

      {weather && <WeatherView weather={weather} city={country.capital[0]} />}

      <div style={{ marginTop: '20px' }}>
        <a href={country.maps.googleMaps} target="_blank" rel="noreferrer">
          📍 View on Google Maps
        </a>
      </div>
    </div>
  )
}

const WeatherView = ({ weather, city }) => (
  <div className="weather-info">
    <h3>Weather in {city}</h3>
    <p style={{ fontSize: '1.5rem' }}>{weather.main.temp} °C</p>
    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather" />
    <p>Wind: {weather.wind.speed} m/s</p>
  </div>
)

export default CountryDetail
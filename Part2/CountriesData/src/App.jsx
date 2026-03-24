import { useState, useEffect } from "react"
import CountriesService from "./Service/countries"
import weatherService from "./Service/weather"
import Filter from "./components/Filter"
import CountryDetail from "./components/CountryDetail"
import CountryList from "./components/CountryList"
import "./App.css"

function App() {
  const [value, setvalue] = useState("")
  const [allCountries, setAllCountries] = useState([])
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    CountriesService.getAll().then((data) => setAllCountries(data))
  }, [])

  const countriesToShow = allCountries.filter((c) =>
    c.name.common.toLowerCase().includes(value.toLowerCase()),
  )

  useEffect(() => {
    if (countriesToShow.length === 1) {
      const country = countriesToShow[0]
      const capital = country.capital?.[0]

      if (capital) {
        weatherService
          .getWeather(capital)
          .then((response) => {
            setWeather(response)
          })
          .catch((error) => console.log("Weather fetch failed:", error))
      }
    } else {
      setWeather(null)
    }
  }, [countriesToShow])

  return (
    <div className="app-container">
      <h1>Countries Explorer</h1>

      <Filter value={value} onChange={(e) => setvalue(e.target.value)} />

      <div className="results">
        {countriesToShow.length > 10 ? (
          <p className="status-msg">Too many matches, specify another filter</p>
        ) : countriesToShow.length === 1 ? (
          <CountryDetail country={countriesToShow[0]} weather={weather} />
        ) : (
          <CountryList countries={countriesToShow} onShow={setvalue} />
        )}
      </div>
    </div>
  )
}

export default App

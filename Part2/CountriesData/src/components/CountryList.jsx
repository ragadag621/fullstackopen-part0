const CountryList = ({ countries, onShow }) => (
  <div className="results-list">
    {countries.map(country => (
      <div key={country.name.common} className="list-item">
        <span>{country.name.common}</span>
        <button onClick={() => onShow(country.name.common)}>Show</button>
      </div>
    ))}
  </div>
)

export default CountryList
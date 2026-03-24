const Filter = ({ value, onChange }) => (
  <div className="search-box">
    <span>🔍</span>
    <input
      type="text"
      value={value}
      placeholder="Search for a country..."
      onChange={onChange}
    />
  </div>
)

export default Filter
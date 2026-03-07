const Filter = ({ filter, handlefilterChange }) => {
  return (
    <>
      <ul>
        <li>
          filter shown with{" "}
          <input value={filter} onChange={handlefilterChange} />
        </li>
      </ul>
    </>
  )
}

export default Filter

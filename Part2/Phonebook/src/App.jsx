import { useState } from "react"
import Filter from "./component/Filter"
import PersonForm from "./component/PersonForm"
import Persons from "./component/Persons" 
import "./App.css"

const App = () => {
  console.log("App rendered")
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ])
  const [filter, setfilter] = useState("")
  const [newName, setNewName] = useState("")
  const [number, setNewNumber] = useState("")
  console.log("persons", persons)
  console.log("newName", newName)
  console.log("number", number)

  const addPerson = (event) => {
    event.preventDefault()

    if (newName.trim() === "" || number.trim() === "") {
      alert("Please check that you have entered a name and a number")
      return
    }
    const nameExists = persons.some(
      (p) => p.name.toLowerCase() === newName.toLowerCase(),
    )
    const numberExists = persons.some((p) => p.number === number)

    if (numberExists) {
      alert(`${number} is already added to phonebook`)
      return
    }
    if (nameExists) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const newObject = {
      name: newName,
      number: number,
    }

    setPersons(persons.concat(newObject))
    setNewName("")
    setNewNumber("")
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlefilterChange = (event) => {
    setfilter(event.target.value)
  }
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase()),
  )

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} handlefilterChange={handlefilterChange} />

      <h3>Add a new</h3>

      <PersonForm
        addPerson={addPerson}
        newName={newName}
        number={number}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>

      <Persons filteredPersons={filteredPersons} />
    </div>
  )

  
}

export default App

import { useState } from 'react'

const Names = ({ persons }) => {
  return (
    <p>{persons.name}</p>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    setPersons(event.target.value)
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={() => handleSubmit}>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Names persons={persons} />
    </div>
  )
}

export default App
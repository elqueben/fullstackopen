import React, { useState } from 'react';

const Names = ({ persons }) => {
  return (
    <div>
      {persons.map((person, index) => (
        <p key={index}>{person.name}</p>
      ))}
    </div>
  );
};

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newName.trim() !== '') {
      const newPerson = { name: newName };
      setPersons([...persons, newPerson]);
      setNewName('');
    }
  };

  const handleNameChange = (event) => {
    event.preventDefault()
    setNewName(event.target.value);
  };

  console.log(persons)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Names persons={persons} />
    </div>
  );
};

export default App;

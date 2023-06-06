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
  const [persons, setPersons] = useState([{ name: 'Arto Hellas'}]);
  const [newName, setNewName] = useState('');
  const [number, etNumber] = useState([{ number: '123-456-7890' }]);
  const [newNumber, setNewNumber] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newName.trim() !== '') {
      const isDuplicate = persons.some((person) => person.name === newName.trim());
      
      if (isDuplicate) {
        alert('Duplicate name! Please enter a different name.');
      } else {
        const newPerson = { name: newName };
        setPersons([...persons, newPerson]);
        setNewName('');
      }
    }

  };

  if (newNumber.trim !== '') {
    const isDuplicate = number
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setNewNumber(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handlePhoneChange} />
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

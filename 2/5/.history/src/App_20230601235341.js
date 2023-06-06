import React, { useState } from 'react';

const NameForm = ({ newName, handleNameChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

const FilterForm = ({ search, handleSearch }) => {
  return (
    <form>
      <h2>Look Up</h2>
      <input value={search} onChange={handleSearch} />
      <div>
        <button type="submit">search</button>
      </div>
    </form>
  );
};

const Names = ({ persons, numbers }) => {
  return (
    <div>
      {persons.map((person, index) => (
        <p key={index}>
          {person.name} - {numbers[index].number}
        </p>
      ))}
    </div>
  );
};

const Filtered = ({ filteredPersons, numbers }) => {
  return (
    <div>
      {filteredPersons.map((person, index) => (
        <p key={index}>
          {person.name} - {numbers[index].number}
        </p>
      ))}
    </div>
  );
};

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');
  const [numbers, setNumbers] = useState([{ number: '123-456-7890' }]);
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newName.trim() !== '' && newNumber.trim() !== '') {
      const isDuplicateName = persons.some(
        (person) => person.name === newName.trim()
      );

      if (isDuplicateName) {
        alert('Duplicate name! Please enter a different name.');
      } else {
        const isDuplicateNumber = numbers.some(
          (number) => number.number === newNumber.trim()
        );

        if (isDuplicateNumber) {
          alert('Duplicate number! Please enter a different number.');
        } else if (!isValidPhoneNumber(newNumber.trim())) {
          alert(
            'Invalid phone number! Please enter a valid phone number.\n(example: 123-456-7890)'
          );
        } else {
          const newPerson = { name: newName };
          const newPhone = { number: newNumber };
          setPersons([...persons, newPerson]);
          setNumbers([...numbers, newPhone]);
          setNewName('');
          setNewNumber('');
        }
      }
    } else {
      alert('Please fill in both name and number fields.');
    }
  };

  const isValidPhoneNumber = (number) => {
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    return phoneRegex.test(number);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setNewNumber(event.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <NameForm
        newName={newName}
        handleNameChange={handleNameChange}
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      <Names persons={persons} numbers={numbers} />
    </div>
  );
};

export default App;
import React from "react";

const AddPersonToPhonebook = ({ persons, newName, newNumber, setPersons, setNewName, setNewNumber }) => {
    
    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber
        }

        if (persons.some(person => person.name === newName)) {
            window.alert(`${newName} is already added to phonebook`)
        }
        else if (persons.some(person => person.number === newNumber)) {
            window.alert(`${newNumber} is already added to phonebook`)
        }
        else {
            setPersons(persons.concat(personObject))
            setNewName("")
            setNewNumber("")
        }
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }
    
    return (
        <form onSubmit={addPerson}>
            <div>
                name: <input value={newName} onChange={handleNameChange} />
            </div>
            <div>
                number: <input value={newNumber} onChange={handleNumberChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default AddPersonToPhonebook;
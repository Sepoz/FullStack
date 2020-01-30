import React from "react";
import servicePersons from "../services/servicePersons";

const AddPersonToPhonebook = ({ persons, newName, newNumber, setPersons, setNewName, setNewNumber, setConfirmMessage }) => {
    
    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber
        }

        if (persons.some(person => person.name === newName)) {
            window.alert(`${newName} is already added to phonebook`)
        } else {
            servicePersons
                .create(personObject)
                .then(initialPersons => {
                    setPersons(persons.concat(initialPersons))
                    setNewName("")
                    setNewNumber("")
                    setConfirmMessage(
                        `${newName} Added`
                    )
                    setTimeout(() => {
                        setConfirmMessage(null)
                    }, 2000)
                })
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
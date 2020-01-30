import React, { useState, useEffect } from 'react';
import AddPersonToPhonebook from "./components/AddPersonToPhonebook";
import Filter from "./components/Filter";
import FilteredRender from './components/FilteredRender';
import servicePersons from "./services/servicePersons";
import PersonRow from './components/PersonRow';
import Notification from "./components/Notification";


const App = () => {
    const [ persons, setPersons] = useState([])
    const [ newName, setNewName] = useState("")
    const [ newNumber, setNewNumber] = useState("")
    const [ personsFiltered, setPersonsFiltered ] = useState([])
    const [ newFilter, setNewFilter] = useState("")
    const [ confirmMessage, setConfirmMessage ] = useState(null)

    useEffect(() => {
        servicePersons
            .getAll()
            .then(initialPersons => {
                setPersons(initialPersons);
            })
    }, [])

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={confirmMessage} />
            <div>
                search for: <Filter persons={persons} newFilter={newFilter} setNewFilter={setNewFilter} setPersonsFiltered={setPersonsFiltered} />
                <FilteredRender personsFiltered={personsFiltered} />
            </div>
            <br></br>
            <br></br>
            <div>
                <AddPersonToPhonebook persons={persons} newName={newName} newNumber={newNumber} setPersons={setPersons} setNewName={setNewName} setNewNumber={setNewNumber} setConfirmMessage={setConfirmMessage} />
            </div>
            <h2>Numbers</h2>
            <ul>
                <PersonRow persons={persons} />
            </ul>
        </div>
    )
}

export default App;
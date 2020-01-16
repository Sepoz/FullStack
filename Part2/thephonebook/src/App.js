import React, { useState } from 'react';
import AddPersonToPhonebook from "./components/AddPersonToPhonebook";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import FilteredRender from './components/FilteredRender';


const App = () => {
    const [ persons, setPersons] = useState([
        { name: "Simone Boccolari", number: "3273929903"},
        { name: "Carla Pollastri", number: "3387166900"},
        { name: "Mirco Boccolari", number:"3456243354"}
    ])
    const [ newName, setNewName] = useState("")
    const [ newNumber, setNewNumber] = useState("")
    const [ personsFiltered, setPersonsFiltered ] = useState([])
    const [ newFilter, setNewFilter] = useState("")

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                search for: <Filter persons={persons} newFilter={newFilter} setNewFilter={setNewFilter} setPersonsFiltered={setPersonsFiltered} />
                <FilteredRender personsFiltered={personsFiltered} />
            </div>
            <br></br>
            <br></br>
            <div>
                <AddPersonToPhonebook persons={persons} newName={newName} newNumber={newNumber} setPersons={setPersons} setNewName={setNewName} setNewNumber={setNewNumber} />
            </div>
            <h2>Numbers</h2>
            <ul>
                <Persons persons={persons} />
            </ul>
        </div>
    )
}

export default App;
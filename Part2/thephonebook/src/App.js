import React, { useState, useEffect } from 'react';
import axios from "axios";
import AddPersonToPhonebook from "./components/AddPersonToPhonebook";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import FilteredRender from './components/FilteredRender';


const App = () => {
    const [ persons, setPersons] = useState([])
    const [ newName, setNewName] = useState("")
    const [ newNumber, setNewNumber] = useState("")
    const [ personsFiltered, setPersonsFiltered ] = useState([])
    const [ newFilter, setNewFilter] = useState("")

    useEffect(() => {
        axios
            .get("http://localhost:3001/persons")
            .then(response => {
                setPersons(response.data)
            })
    }, [])

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
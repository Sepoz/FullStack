import React from "react";


const Filter = ({ persons, newFilter, setNewFilter , personsFiltered, setPersonsFiltered}) => {


    const filterPersons = (event) => {
        event.preventDefault()

        const filtered = persons.filter(person => person.name === newFilter)

        setPersonsFiltered(filtered)

        setNewFilter("")
    }

    const handleFilterName = (event) => {
        setNewFilter(event.target.value)
    }
    
    return (
        <div>
            <form onSubmit={filterPersons}>
                <input value={newFilter} onChange={handleFilterName} />
                <button type="submit">search</button>
            </form>
        </div>
    )
}

export default Filter;
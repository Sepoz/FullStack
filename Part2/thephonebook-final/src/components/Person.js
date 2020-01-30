import React from "react";
import axios from "axios";


const Person = ({ person }) => {
    
    const removePerson = () => {
        const url = `http://localhost:3001/persons/${person.id}`

        if (window.confirm(`Delete ${person.name}?`) === true) {
            axios
                .delete(url)
                .then(window.location.reload(true))
        }
    }

    return (
        <li>
            {person.name} {person.number}
            <button onClick={() => {removePerson(person.id)}}>delete</button>
        </li>
    )
}

export default Person;
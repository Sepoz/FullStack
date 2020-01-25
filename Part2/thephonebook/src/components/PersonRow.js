import React from "react";
import Person from "./Person";


const PersonRow = ({ persons }) => persons.map(person =>
        <Person
            key={person.name}
            person={person}
            persons={persons}
        />
    )

export default PersonRow;
import React from "react";

const FilteredRender = ({ personsFiltered }) => {
    return (
        personsFiltered.map(person => <li key={person.name}>{person.name} {person.number}</li>)
    )
}

export default FilteredRender;
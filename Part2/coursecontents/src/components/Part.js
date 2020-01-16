import React from "react"

const Part = (props) => props.course.parts.map(part => <li key={part.id}>{part.name} {part.exercises}</li>)

export default Part
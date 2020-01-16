import React from "react"

const Total = (props) => {
    let total = props.course.parts.reduce((acc, val) => acc + val.exercises, 0)
    return (
        <li>total of {total} exercises</li>
    )
}

export default Total

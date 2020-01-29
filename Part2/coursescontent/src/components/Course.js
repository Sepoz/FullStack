import React from "react";

const Header = ({ course }) => {
    return (
        <h2>{course.name}</h2>
    )
}

const Content = ({ course }) => {
    
    return (
        <div>
            {course.parts.map(coursePart => <Part coursePart={coursePart} />)}
        </div>
    )
}

const Part = ({ coursePart }) => {
    return (
        <li>{coursePart.name} {coursePart.exercises}</li>
    )
}

const Total = ({ course }) => {
    const total = course.parts.reduce((acc, val) => acc + val.exercises, 0)
    
    return (
        <li>total of {total} exercises</li>
    )
}

const Course = ({ course }) => {

    return (
        <div>
            <Header course={course} />
            <ul>
                <Content course={course}/>
                <Total course={course} />
            </ul>
        </div>
    )
}

export default Course;
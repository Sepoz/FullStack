import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => <h1>{props.course.name}</h1>

const Course = (props) => {
    return (
        <div>
            <Header course={props.course}/>
            <ul>
                <Content course={props.course}/>
                <Total course={props.course} />
            </ul>
        </div>
    )
}

const Part = (props) => props.course.parts.map(part => <li key={part.id}>{part.name} {part.exercises}</li>)

const Total = (props) => {
    let total = props.course.parts.reduce((acc, val) => acc + val.exercises, 0)
    return (
        <li>total of {total} exercises</li>
    )
}

const Content = (props) => {
    return (
        <Part course={props.course} /> 
    )
}
    

const App = () => {
    const course = {
        name: "Half Stack appliction development",
        parts: [
            {
                name: "Fundamental of React",
                exercises: 10,
                id: 1
            },
            {   
                name: "Using props to pass data",
                exercises: 7,
                id: 2
            },
            {
                name: "State of a component",
                exercises: 14,
                id: 3
            },
            {
                name: "Redux",
                exercises: 11,
                id: 4
            }
        ]
    }
    return (
        <div>
            <Course course= {course} /> 
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

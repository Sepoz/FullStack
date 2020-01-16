import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => props.courses.map(course => <h1 key={course.id}>{course.name}</h1>)

const Course = (props) => {
    return (
        <div>
            <Header courses={props.courses}/>
        </div>
    )
}
    
const App = () => {
    const courses = [
        {
            name: "Half Stack appliction development",
            id: 1,
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
        },
        {
            name: "Node.js",
            id: 2,
            parts: [
                {
                    name: "Routing",
                    exercises: 3,
                    id: 1
                },
                {
                    name: "Middlewares",
                    exercises: 7,
                    id: 2 
                }
            ]
        }
    ]
    return (
        <div>
            <h1>Web development curriculum</h1>
            <Course courses= {courses} /> 
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

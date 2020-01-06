import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistic = ({ text, value }) => {
    return (
        <p>{text} {value}</p>
    )
}

const Statistics = (props) => {

    const average = () => {
        let total = 0
        for (let i = 0; i < props.allFeedback.length; i++) {
            total += props.allFeedback[i]
        }
        let averageValue = total / props.allFeedback.length

        return (
            <p>average: {averageValue}</p>
        )
    }

    const positive = () => {
        let positives = 0
        for (let i = 0; i < props.allFeedback.length; i++) {
            if (props.allFeedback[i] > 0) {
                positives += 1
            }
        }
        let percentage = (positives / props.allFeedback.length) * 100

        return (
            <p>positive: {percentage}</p>
        )
    }

    if (props.allFeedback.length === 0) {
        return (
            <div>
                <h1>statistics</h1>
                <p>No feedback given</p>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>statistics</h1>
                <Statistic text="good:" value={props.good} />
                <Statistic text="neutral:" value={props.neutral} />
                <Statistic text="bad:" value={props.bad} />
                <Statistic text="all:" value={props.allFeedback.length} />
                <p>{average()}</p>
                <p>{positive()}</p>
            </div>
        )
    }
}

const Button = ({ onClick, text }) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

const App = (props) => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [allFeedback, setAll] = useState([])
    
    const handleGoodFeedback = () => {
        setAll(allFeedback.concat(1))
        setGood(good + 1)
    }
    
    const handleNeutralFeedback = () => {
        setAll(allFeedback.concat(0))
        setNeutral(neutral + 1)
    }

    const handleBadFeedback = () => {
        setAll(allFeedback.concat(-1))
        setBad(bad + 1)
    }


    return (
        <div>
            <h1>give feedback</h1>
            <Button onClick={handleGoodFeedback} text="good" />
            <Button onClick={handleNeutralFeedback} text="neutral" />
            <Button onClick={handleBadFeedback} text="bad" />
            <Statistics good={good} neutral={neutral} bad={bad} allFeedback={allFeedback} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

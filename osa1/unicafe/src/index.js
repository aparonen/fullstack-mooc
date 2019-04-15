import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Feedback = ({handlers}) => (
    <div>
        <button onClick={handlers.good}>Hyvä</button>
        <button onClick={handlers.neutral}>Neutraali</button>
        <button onClick={handlers.bad}>Huono</button>
    </div>
)

const Statistics = ({reviews: {good, neutral, bad}}) => {
    const total = good + neutral + bad

    if (total <= 0) {
        return <p>Ei yhtään palautetta annettu.</p>
    }

    return (
        <div>
            <p>Hyvä: {good}</p>
            <p>Neutraali: {neutral}</p>
            <p>Huono: {bad}</p>
            <p>Yhteensä: {total}</p>
            <p>Keskiarvo: {(good - bad) / total}</p>
            <p>Positiivisia: {(good / total) * 100} %</p>
        </div>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGood = () => setGood(good + 1)
    const handleNeutral = () => setNeutral(neutral + 1)
    const handleBad = () => setBad(bad + 1)

    const reviews = {
        good: good,
        neutral: neutral,
        bad: bad,
    }
    const handlers = {
        good: handleGood,
        neutral: handleNeutral,
        bad: handleBad,
    }

    return (
        <div>
            <h1>Anna palautetta</h1>
            <Feedback handlers={handlers} />
            <h1>Statistiikka</h1>
            <Statistics reviews={reviews} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

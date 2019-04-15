import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Feedback = ({handlers}) => (
    <div>
        <h1>Anna palautetta</h1>
        <button onClick={handlers.good}>Hyvä</button>
        <button onClick={handlers.neutral}>Neutraali</button>
        <button onClick={handlers.bad}>Huono</button>
    </div>
)

const Statistics = ({reviews}) => (
    <div>
        <h1>Statistiikka</h1>
        <p>Hyvä: {reviews.good}</p>
        <p>Neutraali: {reviews.neutral}</p>
        <p>Huono: {reviews.bad}</p>
    </div>
)

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
            <Feedback handlers={handlers} />
            <Statistics reviews={reviews} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

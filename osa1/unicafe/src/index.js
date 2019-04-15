import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>{text}</button>
)

const Statistics = ({reviews: {good, neutral, bad}}) => {
    const total = good + neutral + bad

    if (total <= 0) {
        return <p>Ei yhtään palautetta annettu.</p>
    }

    return (
        <div>
            <Statistic text="Hyvä" value={good} />
            <Statistic text="Neutraali" value={neutral} />
            <Statistic text="Huono" value={bad} />
            <Statistic text="Yhteensä" value={total} />
            <Statistic text="Keskiarvo" value={(good - bad) / total} />
            <Statistic
                text="Positiivisia"
                value={(good / total) * 100}
                unit="%"
            />
        </div>
    )
}

const Statistic = ({text, value, unit}) => (
    <p>{text}: {value} {unit}</p>
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

    return (
        <div>
            <h1>Anna palautetta</h1>
            <Button handleClick={handleGood} text="Hyvä" />
            <Button handleClick={handleNeutral} text="Neutraali" />
            <Button handleClick={handleBad} text="Huono" />
            <h1>Statistiikka</h1>
            <Statistics reviews={reviews} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

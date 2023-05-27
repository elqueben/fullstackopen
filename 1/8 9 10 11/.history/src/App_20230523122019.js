import { useState } from 'react'

const Button = () => {
  return (
    <>
      <h1>give feedback</h1>
      <button onClick={goodCounter}>good</button>
      <button onClick={neutralCounter}>neutral</button>
      <button onClick={badCounter}>bad</button>
    </>
  )
}

const Statistics = () => {
  return (
    <>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}%</p>
      <p>positive {positive}%</p>

    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let goodCounter = () => {
    setGood(0);
    setGood(good + 1);
  }

  let neutralCounter = () => {
    setNeutral(0);
    setNeutral(neutral + 1);
  }

  let badCounter = () => {
    setBad(0);
    setBad(bad + 1);
  }

  return (
    <div>
      <Button />
      <Statistics />
    </div>
  )
}

export default App
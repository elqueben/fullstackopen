import { useState } from 'react'

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

  const Button = () => {
    return (
      <>
        <button>good</button>
        <button>neutral</button>
        <button>bad</button>
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
      </>
    )
  }

  let all = {good} + {neutral} + {bad}

  return (
    <div>
      <h1>give feedback</h1>
      button onClick={goodCounter}>good</button>
      <Button onClick={neutralCounter}>neutral</button>
      <Button onClick={badCounter}>bad</button>
      <Statistics />
      <p></p>

    </div>
  )
}

export default App
import { useState } from 'react'

const statistics = () => {
  return (
    <>
      
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

  let all = {good} + {neutral} + {bad}

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={goodCounter}>good</button>
      <button onClick={neutralCounter}>neutral</button>
      <button onClick={badCounter}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p></p>

    </div>
  )
}

export default App
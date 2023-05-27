import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let goodCounter = () => {
    console.log("clicked")
    setGood(0);
    setGood(good + 1)
  }

  let neutralCounter = () => {
    setNeutral(0);
    setNeutral(neutral + 1)
  }

  let badCounter = () => {
    setBad(0);
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={goodCounter}>good</button>
      <button onClick={neutralCounter}>neutral</button>
      <button onClick={badCounter}>bad</button>
      <h1>statistics</h1>
      <p>good {goodCounter}</p>
      <p>neutral {neutralCounter}</p>
      <p>bad {badCounter}</p>
    </div>
  )
}

export default App
import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let goodCounter = () => {
    setGood(0);
    setGood(good + 1)
  }

  let goodCounter = () => {
    setGood(0);
    setGood(good + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={goodCounter()}>good</button>
      <button>neutral</button>
      <button>bad</button>
      <h1>statistics</h1>
      <p>good {goodCounter}</p>
      <p>neutral {neutralCounter}</p>
      <p>bad {badCounter}</p>
    </div>
  )
}

export default App
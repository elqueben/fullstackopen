import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodCounter = () => {
    setGood(good + 1);
  };

  const neutralCounter = () => {
    setNeutral(neutral + 1);
  };

  const badCounter = () => {
    setBad(bad + 1);
  };

  const all = good + neutral + bad;
  const average = Math.round(all / 3);
  const positive = Math.round((good / all) * 100);

  const Button = () => {
    return (
      <>
        <h1>give feedback</h1>
        <button onClick={goodCounter}>good</button>
        <button onClick={neutralCounter}>neutral</button>
        <button onClick={badCounter}>bad</button>
      </>
    );
  };

  const Statistics = () => {
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
        <p>all {all}</p>
        <p>average {average}%</p>
        <p>positive {positive}%</p>
      </div>
    );
  };

  return (
    <div>
      <Button />
      <Statistics />
      <h1>statistics</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {all}</p>
        <p>average {average}%</p>
        <p>positive {positive}%</p>
    </div>
  );
};

export default App;

import React, { useState } from 'react';

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistic = ({ text, value }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};

const Reset = ({ handleClick }) => {
  return <button onClick={handleClick}>0</button>
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = Math.round(all / 3);
  const positive = Math.round((good / all) * 100);

  if (all === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <>
      <h1>statistics</h1>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="all" value={all} />
      <Statistic text="average" value={`${average}%`} />
      <Statistic text="positive" value={`${positive}%`} />
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  const handleReset = () => {
    setBad()
    setGood()
    set
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
      <Reset handleClick={} />
    </div>
  );
};

export default App;

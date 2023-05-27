import React, { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast is to go well.'
  ];

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const handleVote = () => {
    const updatedVotes = [...votes];
    updatedVotes[currentQuoteIndex] += 1;
    setVotes(updatedVotes);
  };

  const handleClick = () => {
    const newIndex = (currentQuoteIndex + 1) % anecdotes.length;
    setCurrentQuoteIndex(newIndex);
  };

  const most = () => {
    if (votes == 0) {
      return <p>No votes yet</p>
    }
  }

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <p>{anecdotes[currentQuoteIndex]}</p>
      <p>Votes: {votes[currentQuoteIndex]}</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleClick}>Next Anecdote</button>
      <h1>Anecdote with most Votes</h1>
      
    </div>
  );
};

export default App;

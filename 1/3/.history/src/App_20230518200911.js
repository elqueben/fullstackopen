const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }

    const total = part1.exercises + part2.exercises + part3.exercises;

    return (
      <div>
        <h1>{course}</h1>
        <ul>
          <li>{part1.name}: {part1.exercises}</li>
          <li>{part2.name}: {part2.exercises}</li>
          <li>{part3.name}: {part3.exercises}</li>
        </ul>
        <ul>
        <p>Total number of exercises: {total}</p>
        </ul>
      </div>
    )
  }

export default App
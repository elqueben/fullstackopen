const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <h1>{course}</h1>
      <ul>
        <li>{parts[0].name}</li>
        <li>{parts[1].name}</li>
        <li>{parts[2].name}</li>
      </ul>
    </div>
  )
}

export default App
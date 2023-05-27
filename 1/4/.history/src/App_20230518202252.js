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

  console.log(parts.[0])

  return (
    <div>
      <h1>{course}</h1>
      <ul>
        <li></li>
      </ul>
    </div>
  )
}

export default App
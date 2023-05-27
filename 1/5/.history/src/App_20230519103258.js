const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  console.log(course.parts[0].name)

  return (
    <div>
      <h1>{course.name}</h1>
      <ul>
        <li>{course.parts[0].name}: {course.parts[0].exercises}</li>
        <li>{course.parts[1].name}: {course.parts[0].exercises}</li>
        <li>{course.parts[2].name}: {course.parts[0].exercises}</li>
      </ul>
    </div>
  )
}

export default App

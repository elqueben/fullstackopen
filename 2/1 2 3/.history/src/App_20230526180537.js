const App = () => {

  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  const Course = ()  => {
    return(
      <>
      <h1>{course.name}</h1>
      <ul>
        {course.parts.map(course =>
          <li key={course.id}>
            {course.parts.exercises}
          </li>
        )}
      </ul>
      </>
    )
  }

  return (
  <Course course={course} />
  )
}

export default App
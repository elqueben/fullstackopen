const App = () => {

  const Course = ({ course }) => {
    return (
      <div>
        <h1>{course.name}</h1>
        {course.parts.map((part) => (
          <p key={part.id}>
            {part.name} - {part.exercises} exercises
          </p>
        ))}
      </div>
    );
  };

  const Added = ({ course }) => {
    return (
      <div>
      {course.parts.map((x) => ())}
      </div>
    )
  }
  
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

  return (
  <Course course={course} />
  )
}

export default App
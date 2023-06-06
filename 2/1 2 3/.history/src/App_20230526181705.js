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

    const partList = course.parts.map((part) => {
      return {
        name: part.name,
        exercises: part.exercises
      };
    });

    console.log(partList.name);

    return(
      <>
      <h1>{course.name}</h1>
      </>
    )
  }


  return (
  <Course course={course} />
  )
}

export default App
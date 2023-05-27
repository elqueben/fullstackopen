let Header = (props) => {

  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
}

let Content = (props) => {

  let Part = () => {
    const part1 = "Fundamentals of React"
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
      <>
        <Part part={props.part1} />
        <Part part={props.part2} />
        <Part part={props} />
      </>
    )
  }
}

let Total = () => {

  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <>
      <ul>
        <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
      </ul>
    </>
  )
}


const App = () => {
  // const-definitions

  let course = "Half Stack application development" 

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  )
}

export default App
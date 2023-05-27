let Header = (props) => {

  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
}

let Content = () => {

  let Part = () => {
    cost part1 = "Fundamentals of React"
  }

  return (
    <>
      <Part />
      <Part />
      <Part />
    </>
  )
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
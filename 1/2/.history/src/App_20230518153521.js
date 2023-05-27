let Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

let Part = (props) => {
  return (
    <>
    <p>{props.name} - Number of exercises: {props.exercises}</p>
    </>
  )
}

let Content = () => {
  return (
    <>
      <Part name="Part 1" exercises={10} />
      <Part name="Part 2" exercises={7} />
      <Part name="Part 3" exercises={14} />
    </>
  )
}

let Total = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <>
      <p>Number of exercises: {exercises1 + exercises2 + exercises3}</p>
    </>
  )
}

const App = () => {
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
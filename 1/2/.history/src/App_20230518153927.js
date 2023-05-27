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
    <p>{props.name}: {props.exercises}</p>
    </>
  )
}

let Content = () => {
  return (
    <>
      <ul>
        <li>
          <Part name="Fundementals of React" exercises={10} />
        </li>
        <li>
          <Part name="Using props to pass" exercises={7} />
        </li>
        <li></li>
          <Part name="State of a component" exercises={14} />
      </ul>
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

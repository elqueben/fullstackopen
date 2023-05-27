let Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

let Content = () => {
  return (
    <>
      <ul>
        <li>
          Fundementals of React
        </li>
        <li>
          Using props to pass data
        </li>
        <li>
          State of a component
        </li>
      </ul>
    </>
  )
}

let Total = () => {
  return (
    <>

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
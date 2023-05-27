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
          {part1} {{exercises1}}
        </li>
        <li>
          {part2} {exercises2}

        </li>
        <li>
          {part3}
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
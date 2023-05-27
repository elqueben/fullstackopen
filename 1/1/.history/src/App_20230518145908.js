let Header = (props) => {
  return (
    <h1>{course}</h1>
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
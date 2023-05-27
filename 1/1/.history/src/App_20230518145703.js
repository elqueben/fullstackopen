let Header = (props) => {
  return (
    <h1>Half Stack application development</h1>
  )
}


const App = () => {
  // const-definitions

  let course

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  )
}

export default App
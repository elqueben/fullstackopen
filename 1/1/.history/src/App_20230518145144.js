const App = () => {
  // const-definitions

  let Header = (props) => {
    return (
      <h1>Course</h1>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  )
}

export default App
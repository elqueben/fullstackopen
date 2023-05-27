let Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

let Content = () => {

}

let Total =()


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
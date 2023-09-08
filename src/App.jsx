import './App.css'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'
import Counter from './counter'

function App() {
  function handleClick(){
    alert('Button Click')
  }

  const handleClick2 = ()=>{
    alert('Button click 2')
  }

  const addToFive = (num) =>{
    alert(num + 5)
  }

  return (
    <>
      <h3>React Core Concepts Part 2</h3>
      <Friends></Friends>
      
      <Users></Users>

      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => alert('Button click 3')}>Click 3</button>
      <button onClick={() => addToFive(3)}>Click 4</button>
    </>
  )
}

export default App

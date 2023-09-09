import './App.css';
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import User from './User';

function App() {
  const clickMe = () => {
    alert('Hello React Developer');
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <User></User>
      <Team></Team>
      <Counter></Counter>
      <button onClick={clickMe}>Click Me</button>
      <button onClick={()=>alert('Hello Web Developer')}>Click Me 2</button>
    </>
  )
}

export default App

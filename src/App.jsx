import Counter from './Counter';
import Batsman from './Batsman';
import './App.css'

function App() {

  function handleClick() {
    alert("clicked me!");
  }
  const handleClick2 = () => {
    alert("Clicked 2");
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }
  return (
    <>
      <Counter></Counter>
      <Batsman></Batsman>
      <h1>Vite + React</h1>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me</button>
      <button onClick={() => alert("Clicked 3")}>Click 3</button>
      <button onClick={() => handleAdd5(12)}>Clicked add 5</button>
    </>
  )
}

export default App

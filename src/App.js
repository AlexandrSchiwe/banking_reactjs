import { useState } from "react";
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  const handleOnChange = (e) => {
    setInput(e.target.value);
  }

  const handleSubtractValue = () => {
    if (input)
      setCount(count - parseInt(input, 10));
  }

  const handleAddValue = () => {
    if (input)
      setCount(count + parseInt(input, 10));
  }

  return (
    <div className="App">
      <div>
        <input type="text" value={input} onChange={handleOnChange} name="" id="" />
        <button onClick={handleSubtractValue}>Ausgaben</button>
        <button onClick={handleAddValue}>Einnahmen</button>
        {/* <button onClick={() => setCount(count + 1)}>Einnahmen</button> */}
        <p>{count}€</p>
        {/* <button onClick={() => setCount(count - 1)}>Ausgaben</button>
        <button onClick={() => setCount(count - count)}>Reset</button> */}
      </div>
    </div>
  );
}

export default App;

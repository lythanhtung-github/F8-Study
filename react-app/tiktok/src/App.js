import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(1);

  const handleIncrease =() =>{
    // setCounter(counter + 1);

    setCounter(prevState => prevState + 1);
    setCounter(prevState => prevState + 1);
  }

  const handleReduce =() =>{
    setCounter(counter - 1);
  }

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1 style={{ marginLeft: 60 }}>{counter}</h1>
      <button style={{ marginRight: 20 }} onClick={handleIncrease}>Increase</button>
      <button onClick={handleReduce}>Reduce </button>
    </div>
  );
}

export default App;

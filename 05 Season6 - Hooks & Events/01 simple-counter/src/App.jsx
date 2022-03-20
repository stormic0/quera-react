import { useState } from 'react';
import './App.css';

function App() {
  let count = 0;

  const increment = () => {
    count += 1;
  };

  const decrement = () => {
    count -= 1;
  };

  const reset = () => {
    count = 0;
  };

  return (
    <div className="App">
      <div className="counter">
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
}

export default App;

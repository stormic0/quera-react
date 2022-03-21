import { useReducer } from "react";
import "./App.css";

const timerReducer = (state, action) => {
  switch (action.type) {
    case "+":
      return state + 1;
    case "-":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
};

const App = () => {
  const [count, countDispatch] = useReducer(timerReducer, 0);

  return (
    <div className="App">
      <div className="counter">
        <h1>{count}</h1>
        <button onClick={() => countDispatch({ type: "+" })}>+</button>
        <button onClick={() => countDispatch({ type: "-" })}>-</button>
        <button onClick={() => countDispatch({ type: "reset" })}>reset</button>
      </div>
    </div>
  );
};

export default App;

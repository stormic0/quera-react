import Toggle from "react-toggle";
import "./App.css";
import "react-toggle/style.css";
import { useToggle } from "./Hook";

function App() {

  return (
    <div className="App">
      <label>
        <Toggle />
        <span>Toggle</span>
      </label>
    </div>
  );
}

export default App;

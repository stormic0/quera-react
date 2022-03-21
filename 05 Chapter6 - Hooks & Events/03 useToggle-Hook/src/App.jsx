import Toggle from "react-toggle";
import "./App.css";
import "react-toggle/style.css";
import { useToggle } from "./Hook";

function App() {
  const [state, toggle] = useToggle();

  return (
    <div className="App">
      <label>
        <Toggle onChange={toggle} />
        <span>{state ? "Toggled" : "Toggle"}</span>
      </label>
    </div>
  );
}

export default App;

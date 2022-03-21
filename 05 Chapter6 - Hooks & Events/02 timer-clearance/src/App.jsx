import { useState, useEffect } from "react";
import "./App.css";

function App({ initialSeconds }) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (seconds === 0) {
        clearInterval(timeOut);
        return;
      }

      setSeconds(seconds - 1);
    }, 1000);

    return () => clearTimeout(timeOut);
  }, [seconds]);

  return (
    <div className="App">
      <h1 id="timer">{seconds}</h1>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Select from "./components/Select";
import Input from "./components/Input";
import { units } from "./units";

function App() {
  const [amount, setAmount] = useState(0);
  const [fromUnit, setFromUnit] = useState(units[0].factor);
  const [toUnit, setToUnit] = useState(units[0].factor);
  const [result, setResult] = useState(0);

  const handleConvert = () => setResult((amount * fromUnit) / toUnit);

  return (
    <>
      <div className="converter-form">
        <Input
          label={"Amount"}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />

        <div className="row">
          <Select
            label={"From"}
            items={units}
            onChange={(e) => setFromUnit(parseFloat(e.target.value))}
          />
          <Select
            label={"To"}
            items={units}
            onChange={(e) => setToUnit(parseFloat(e.target.value))}
          />

          <button onClick={handleConvert}>Convert</button>
        </div>
      </div>

      <div id="result">
        Result is: <span data-testid="result">{result}</span>
      </div>
    </>
  );
}

export default App;

import React, { useState } from "react";
import { validate } from "../utils/validators";

const Input = ({ label, id, type, validators, errorText }) => {
  const [firstTime, setFirstTime] = useState(true);
  const [isValid, setIsValid] = useState(true);

  const handleFocusOut = (e) => {
    setFirstTime(false);
    setIsValid(validate(e.target.value, validators));
  };

  return (
    <div
      className={`form-input ${
        !firstTime && !isValid && "form-input--invalid"
      }`}
      data-testid="form-input"
    >
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        onBlur={handleFocusOut}
        onChange={(e) => setIsValid(validate(e.target.value, validators))}
      />
      <p>{!firstTime && !isValid && errorText}</p>
    </div>
  );
};

export default Input;

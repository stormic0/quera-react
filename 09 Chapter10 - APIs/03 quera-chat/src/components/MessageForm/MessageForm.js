import React, { useState, useRef, useEffect } from "react";
import "./MessageForm.css";

function MessageForm({ onMessageSend }) {
  const [textInput, setTextInput] = useState("");
  const focusOnInput = useRef(null);

  const handleInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (textInput.length > 0 && (textInput.match(/ /g) || []).length !== textInput.length) {
      onMessageSend({ me: true, body: textInput });
      setTextInput("");
    }
  };

  useEffect(() => {
    focusOnInput.current.focus();
  }, []);

  return (
    <form className="MessageForm" onSubmit={handleFormSubmit} data-testid="submit-message">
      <div className="input-container">
        <input
          data-testid="input-message"
          type="text"
          placeholder="پیام خود را اینجا بنویسید..."
          onChange={handleInputChange}
          value={textInput}
          ref={focusOnInput}
        />
      </div>
      <div className="button-container">
        <button type="submit">ارسال</button>
      </div>
    </form>
  );
}

export default MessageForm;

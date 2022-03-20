import { useState } from "react";

function Form({ setFlashCard }) {
  const [formInputs, setFormInputs] = useState({
    word: "",
    persianEquivalent: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    setFlashCard(formInputs);
    setFormInputs({
      word: "",
      persianEquivalent: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        id="word-input"
        placeholder="کلمه"
        value={formInputs.word}
        onChange={(e) => setFormInputs({ ...formInputs, word: e.target.value })}
      />
      <input
        id="persian-equivalent-input"
        placeholder="معادل فارسی"
        value={formInputs.persianEquivalent}
        onChange={(e) =>
          setFormInputs({ ...formInputs, persianEquivalent: e.target.value })
        }
      />
      <button id="submit-btn">ثبت</button>
    </form>
  );
}

export default Form;

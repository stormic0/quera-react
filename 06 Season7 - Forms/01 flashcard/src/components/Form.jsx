import { useState } from 'react'

function Form({ setFlashCard }) {
  return (
    <form onSubmit={}>
      <input
        id="word-input"
        placeholder="کلمه"
        value={}
        onChange={}
      />
      <input
        id="persian-equivalent-input"
        placeholder="معادل فارسی"
        value={}
        onChange={}
      />
      <button id="submit-btn">ثبت</button>
    </form>
  )
}

export default Form

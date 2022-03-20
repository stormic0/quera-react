import { useState } from 'react'
import Form from './components/Form'
import FlashCard from './components/FlashCard'

function App() {
  const [flashCard, setFlashCard] = useState({
    word: '',
    persianEquivalent: '',
  })

  return (
    <div className="container">
      <Form />
      <FlashCard />
    </div>
  )
}

export default App

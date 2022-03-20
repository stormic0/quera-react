import { useState } from 'react'

function FlashCard({ flashCard }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className={`flashcard${isFlipped ? ' flip' : ''}`}>
      <div className="front-side"></div>
      <div className="back-side"></div>
    </div>
  )
}

export default FlashCard

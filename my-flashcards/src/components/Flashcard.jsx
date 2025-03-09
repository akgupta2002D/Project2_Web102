import React from "react";

function Flashcard({ card, isFlipped, onFlip }) {
  return (
    <div className="flashcard-container" onClick={onFlip}>
      <div className={`flashcard ${isFlipped ? "flipped" : ""}`}>
        <div className="front">
          {card.question}
        </div>
        <div className="back">
          {card.answer}
        </div>
      </div>
    </div>
  );
}

export default Flashcard;

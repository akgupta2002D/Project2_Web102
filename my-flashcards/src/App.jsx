import React, { useState } from "react";
import Header from "./components/Header";
import Flashcard from "./components/Flashcard";
import NextButton from "./components/NextButton";
import "./App.css";

// Array of flashcards with an Agentic AI theme
const flashcards = [
  {
    question: "What is Agentic AI?",
    answer:
      "Agentic AI refers to artificial intelligence that operates autonomously with goal-directed behavior, making decisions with minimal human intervention."
  },
  {
    question: "How might Agentic AI shape our future?",
    answer:
      "It could revolutionize industries by automating complex tasks and driving innovation, but it also raises important ethical and safety challenges."
  },
  {
    question: "What ethical concerns arise from Agentic AI?",
    answer:
      "Key concerns include accountability, transparency, potential bias, and the risk of unintended consequences when AI operates independently."
  },
  {
    question: "How can society prepare for an AI-driven future?",
    answer:
      "By establishing ethical guidelines, robust oversight, and regulatory frameworks, as well as investing in research to ensure AI remains safe and beneficial."
  },
  {
    question: "What is the role of human oversight in Agentic AI systems?",
    answer:
      "Human oversight is crucial to ensure that autonomous decisions align with ethical standards and societal values, mitigating risks associated with full automation."
  }
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Flip between front and back of the card
  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  // Pick a random new card different from the current one
  const handleNext = () => {
    let nextIndex;
    if (flashcards.length > 1) {
      do {
        nextIndex = Math.floor(Math.random() * flashcards.length);
      } while (nextIndex === currentIndex);
    } else {
      nextIndex = currentIndex;
    }
    setCurrentIndex(nextIndex);
    setIsFlipped(false);
  };

  return (
    <div className="App">
      <Header
        title="Agentic AI: Information & Future"
        description="Explore the concepts behind agentic AI—its potential, its risks, and how it may shape our future."
        totalCards={flashcards.length}
      />

      <Flashcard
        card={flashcards[currentIndex]}
        isFlipped={isFlipped}
        onFlip={handleFlip}
      />

      <NextButton onNext={handleNext} />
    </div>
  );
}

export default App;

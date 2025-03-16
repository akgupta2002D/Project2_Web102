import React, { useState } from "react";
import Header from "./components/Header";
import Flashcard from "./components/Flashcard";
import NextButton from "./components/NextButton";
import "./App.css";
import flashcards from "./flashcards";

function App() {
  // To pick the next card or display card using the index in the json objects.
  const [currentIndex, setCurrentIndex] = useState(0);
  // This is to identify if the card is flipped.
  const [isFlipped, setIsFlipped] = useState(false);
  // we need states for feedback and userText
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleInputChange = (event) => {
    setUserInput(event.target.value); // Updates user input state
  };

  // Flip between front and back of the card

  const handleFlip = () => {
    setIsFlipped((prev) => !prev); // This takes the previous state and negates it, so True to False and False to True
  };

  // Pick a random new card different from the current one
  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
    setIsFlipped(false);
    setUserInput("");  // Clear user input
    setFeedback("");   
    
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(flashcards.length - 1);
    }
    setIsFlipped(false);
    setUserInput("");  // Clear user input
    setFeedback("");   
    
  };

  const handleSubmit = () => {
    const correctAnswer = flashcards[currentIndex].answer.toLowerCase();
    const userAnswer = userInput.trim().toLowerCase();
  
    if (userAnswer === correctAnswer) {
      setFeedback("✅ Correct!");  // Display success message
    } else {
      setFeedback("❌ Incorrect. Try again!");  // Display failure message
    }
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
      <div className="buttonContainerMain">
        <NextButton buttonName={"Back"} onClick={handleBack} />
        <NextButton buttonName={"Next"} onClick={handleNext} />
      </div>

      <div className="input-container">
        <input 
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Type your answer..."
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>

      {feedback && <p className="feedback">{feedback}</p>}
    </div>
    
  );
}

export default App;

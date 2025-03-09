import React from "react";

function NextButton({ onNext }) {
  return (
    <div className="button-container">
      <button onClick={onNext}>Next Card</button>
    </div>
  );
}

export default NextButton;

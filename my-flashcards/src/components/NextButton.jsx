import React from "react";

function NextButton({buttonName, onNext }) {
  return (
    <div className="button-container">
      <button onClick={onNext}>{buttonName}</button>
    </div>
  );
}

export default NextButton;

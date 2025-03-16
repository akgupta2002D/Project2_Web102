import React from "react";

function NextButton({buttonName, onClick }) {
  return (
    <div className="button-container">
      <button onClick={onClick}>{buttonName}</button>
    </div>
  );
}

export default NextButton;

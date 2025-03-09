import React from "react";

function Header({ title, description, totalCards }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <p>{description}</p>
      <p>Total Cards: {totalCards}</p>
    </header>
  );
}

export default Header;

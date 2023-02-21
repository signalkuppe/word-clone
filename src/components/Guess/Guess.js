import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  function letterClass(index) {
    const baseClass = "cell";
    if (!guess) {
      return baseClass;
    }

    return `${baseClass} ${guess[index]?.status}`;
  }

  return (
    <p className="guess">
      {range(5).map((index) => (
        <span key={index} className={letterClass(index)}>
          {guess[index]?.letter || ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;

import React from "react";
import { range } from "../../utils";

function Guess({ guess, checkedGuesses }) {
  function letterClass(index) {
    const baseClass = "cell";
    if (!guess || !checkedGuesses[index]) {
      return baseClass;
    }

    return `${baseClass} ${checkedGuesses[index].status}`;
  }
  return (
    <p className="guess">
      {range(5).map((index) => (
        <span className={letterClass(index)} key={index}>
          {guess.charAt(index) || ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;

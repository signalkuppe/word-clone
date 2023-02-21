import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Guesses({ guesses }) {
  guesses = guesses || [];
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        return <Guess guess={guesses[index] || ""} key={index} />;
      })}
    </div>
  );
}

export default Guesses;

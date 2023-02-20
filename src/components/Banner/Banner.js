import React from "react";

function Banner({ won, guesses, answer, onRestartGame }) {
  let msg;
  if (won) {
    msg = (
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{guesses.length} guesses</strong>.
      </p>
    );
  } else {
    msg = (
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    );
  }
  return (
    <div className={`${won ? "happy" : "sad"} banner`}>
      {msg} <br />
      <button onClick={onRestartGame}>Restart the game</button>
    </div>
  );
}

export default Banner;

import React from "react";

function GuessInput({ onAddGuess, disabled }) {
  const emtyGuess = "";
  const [guess, setGuess] = React.useState(emtyGuess);

  function onSubmit(e) {
    e.preventDefault();
    onAddGuess(guess);
    setGuess(emtyGuess);
  }

  function handleInputChange(e) {
    const {
      target: { value },
    } = e;

    setGuess(value.toUpperCase());
  }

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        required
        minLength={5}
        maxLength={5}
        pattern="^[A-Z]{5}$"
        onChange={handleInputChange}
        title="5 letter word"
        disabled={disabled}
      />
    </form>
  );
}

export default GuessInput;

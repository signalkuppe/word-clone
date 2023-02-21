import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import GuessInput from "../GuessInput";
import Guesses from "../Guesses";
import Banner from "../Banner";

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const randomWord = sample(WORDS);
  const [answer, setAnswer] = React.useState(randomWord);
  function onAddGuess(guess) {
    setGuesses([...guesses, guess]);
  }

  function onRestartGame() {
    setGuesses([]);
    setAnswer(randomWord);
  }

  const checkedGuesses = guesses.map((guess) => checkGuess(guess, answer));
  const won =
    guesses.length &&
    guesses.length <= NUM_OF_GUESSES_ALLOWED &&
    checkedGuesses.find((guess) => guess.every((g) => g.status === "correct"));
  const lose = guesses.length === NUM_OF_GUESSES_ALLOWED && !won;
  const gameEnded = won || lose;

  console.log(answer);

  return (
    <>
      {gameEnded && (
        <Banner
          won={won}
          lose={lose}
          guesses={guesses}
          answer={answer}
          onRestartGame={onRestartGame}
        />
      )}
      <Guesses guesses={checkedGuesses} />
      <GuessInput onAddGuess={onAddGuess} disabled={gameEnded} />
    </>
  );
}

export default Game;

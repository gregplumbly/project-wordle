import React from 'react';

function GuessInput({ onSubmitGuess, gameStatus }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (guess.trim()) {
      onSubmitGuess(guess);
      setGuess('');
    }
  }

  function handleGuessChange(event) {
    setGuess(event.target.value);
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleGuessChange}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="Please enter a 5-letter word"
        disabled={gameStatus !== 'running'}
      />
    </form>
  );
}

export default GuessInput;

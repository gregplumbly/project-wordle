import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');

  function handleSubmitGuess(newGuess) {
    const nextGuesses = [...guessList, newGuess.toUpperCase()];
    setGuessList(nextGuesses);

    // Check if player won
    if (newGuess.toUpperCase() === answer) {
      setGameStatus('won');
      return;
    }

    // Check if player lost (used all 6 guesses)
    if (nextGuesses.length >= 6) {
      setGameStatus('lost');
      return;
    }
  }

  return (
    <div>
      <GuessResults guessList={guessList} answer={answer} />
      <GuessInput onSubmitGuess={handleSubmitGuess} gameStatus={gameStatus} />
      {gameStatus === 'won' && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>{guessList.length} guesses</strong>.
          </p>
        </div>
      )}
      {gameStatus === 'lost' && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </div>
  );
}

export default Game;

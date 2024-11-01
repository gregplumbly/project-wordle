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

  function handleSubmitGuess(newGuess) {
    setGuessList(currentGuessList => [
      ...currentGuessList,
      newGuess.toUpperCase(),
    ]);
  }

  return (
    <div>
      <GuessResults guessList={guessList} answer={answer} />
      <GuessInput onSubmitGuess={handleSubmitGuess} />
    </div>
  );
}

export default Game;

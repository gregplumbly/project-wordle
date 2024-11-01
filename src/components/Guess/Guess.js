import React from 'react';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
  const result = checkGuess(guess, answer);
  const letters = guess ? guess.split('') : Array(5).fill('');

  return (
    <p className="guess">
      {letters.map((letter, index) => (
        <span
          key={index}
          className={`cell ${result ? result[index].status : ''}`}
        >
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;

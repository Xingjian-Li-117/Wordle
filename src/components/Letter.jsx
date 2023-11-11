import React, { useContext } from 'react';
import { AppContext } from '../App';

export default function Letter({letterPos, attemptVal}) {

    const { board, correctWord, curAttempt, wordStates} = useContext(AppContext);
    const letter = board[attemptVal][letterPos];

    const correct = correctWord.toUpperCase()[letterPos] === letter;
    const misplaced = !correct && letter !=="" && correctWord.includes(letter.toLowerCase());

    const letterState = curAttempt.attempt > attemptVal && 
        (correct ? "correct" : misplaced ? "misplaced" : "incorrect");


    return (
        <div className="letter" id={letterState}>{letter}</div>
    )
}



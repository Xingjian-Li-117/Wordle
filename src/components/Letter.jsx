import React, { useContext } from 'react';
import { AppContext } from '../App';

export default function Letter({ letterPos, attemptVal }) {
    const { board, correctWord, curAttempt } = useContext(AppContext);
    const letter = board[attemptVal][letterPos];
    const correctWordUpper = correctWord.toUpperCase();

    const countLetter = (word, letter, upTo) => {
        let count = 0;
        for (let i = 0; i < upTo; i++) {
            if (word[i] === letter) {
                count++;
            }
        }
        return count;
    };

    const correct = correctWordUpper[letterPos] === letter;
    // Check if the letter is in the correct word and its count in the attempt is not more than in the correct word
    const misplaced = !correct && letter !== "" && correctWordUpper.includes(letter) && 
        countLetter(board[attemptVal], letter, letterPos) < countLetter(correctWordUpper.split(''), letter, correctWordUpper.length);

    const letterState = curAttempt.attempt > attemptVal && 
        (correct ? "correct" : misplaced ? "misplaced" : "incorrect");

    return (
        <div className="letter" id={letterState}>{letter}</div>
    );
}

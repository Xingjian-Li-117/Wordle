import React, {useContext} from 'react'
import { AppContext } from '../App'

export default function GameOver() {
    const { gameOver, curAttempt, correctWord, resetGame } = useContext(AppContext);

    console.log(gameOver);

    const renderAttempt = () => {
        if (gameOver.guessedWord) {
            return <h3>You guessed in {curAttempt.attempt} attempts</h3>;
        }
        return null;
    };

    const handleTryAgain = () => {
        resetGame();
    };

    return (
        <div className="gameOver">
            <h1>{gameOver.guessedWord ? "Congratulations!" : "You Failed"}</h1>
            <h3>Correct Word: {correctWord}</h3>
            {renderAttempt()}
            <button className="reset" onClick={handleTryAgain}>Try Again</button> 
        </div>
    );
}





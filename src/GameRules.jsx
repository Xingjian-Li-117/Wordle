import React from 'react';
import './App.css'

export default function GameRules() {
  return (
    <div className="game-rules-container">
      <div className="game-rules">
        <h1>How To Play</h1>
        <h3>Guess the Wordle in 6 tries for easy game and 5 tries for hard game.</h3>
        <p>Each guess must be a valid word.</p>
        <p>The color of the tiles will change to show how close your guess was to the word.</p>
        <div className="examples">
          <h3>Examples</h3>
          <div className="example">
            <div className="box-row">
              <div className="box" id="correct">W</div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
            </div>
            <p>W is in the word and in the correct spot.</p>
          </div>
          <div className="example">
            <div className='box-row'>
            <div className="box"></div>
            <div className="box" id="misplaced">I</div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
            <p>I is in the word but in the wrong spot.</p>
          </div>
          <div className="example">
            <div className="box-row">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box" id="incorrect">U</div>
            <div className="box"></div>
          </div>
            <p>U is not in the word in any spot.</p>
          </div>
        </div>
      </div>
    </div>
  );
}



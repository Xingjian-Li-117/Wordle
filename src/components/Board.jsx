import React, { useContext } from 'react';
import { AppContext } from '../App';
import Letter from './Letter';

export default function Board() {
  const { board, gameMode } = useContext(AppContext); 
  const renderBoard = () => {
    return board.map((row, rowIndex) => (
      <div className="row" key={rowIndex}>
        {row.map((_, colIndex) => (
          <Letter letterPos={colIndex} attemptVal={rowIndex} key={colIndex} />
        ))}
      </div>
    ));
  };

  const boardClass = (gameMode === 'easy')?"board" : "hardBoard";

  return <div className={boardClass}>
            {renderBoard()}
        </div>;
}


/*
import React, { useState } from 'react';
import Letter from './Letter';

export default function Board() {
  return (
    <div className="board">
        <div className="row">
            <Letter letterPos={0} attemptVal={0}/>
            <Letter letterPos={1} attemptVal={0}/>
            <Letter letterPos={2} attemptVal={0}/>
            <Letter letterPos={3} attemptVal={0}/>
            <Letter letterPos={4} attemptVal={0}/>
            <Letter letterPos={5} attemptVal={0}/>
        </div>
        <div className="row">
            <Letter letterPos={0} attemptVal={1}/>
            <Letter letterPos={1} attemptVal={1}/>
            <Letter letterPos={2} attemptVal={1}/>
            <Letter letterPos={3} attemptVal={1}/>
            <Letter letterPos={4} attemptVal={1}/>
            <Letter letterPos={5} attemptVal={1}/>
        </div>
        <div className="row">
            <Letter letterPos={0} attemptVal={2}/>
            <Letter letterPos={1} attemptVal={2}/>
            <Letter letterPos={2} attemptVal={2}/>
            <Letter letterPos={3} attemptVal={2}/>
            <Letter letterPos={4} attemptVal={2}/>
            <Letter letterPos={5} attemptVal={2}/>
        </div>
        <div className="row">
            <Letter letterPos={0} attemptVal={3}/>
            <Letter letterPos={1} attemptVal={3}/>
            <Letter letterPos={2} attemptVal={3}/>
            <Letter letterPos={3} attemptVal={3}/>
            <Letter letterPos={4} attemptVal={3}/>
            <Letter letterPos={5} attemptVal={3}/>
        </div>
        <div className="row">
            <Letter letterPos={0} attemptVal={4}/>
            <Letter letterPos={1} attemptVal={4}/>
            <Letter letterPos={2} attemptVal={4}/>
            <Letter letterPos={3} attemptVal={4}/>
            <Letter letterPos={4} attemptVal={4}/>
            <Letter letterPos={5} attemptVal={4}/>
        </div>
        <div className="row">
            <Letter letterPos={0} attemptVal={5}/>
            <Letter letterPos={1} attemptVal={5}/>
            <Letter letterPos={2} attemptVal={5}/>
            <Letter letterPos={3} attemptVal={5}/>
            <Letter letterPos={4} attemptVal={5}/>
            <Letter letterPos={5} attemptVal={5}/>
        </div>
    </div>
  )
}

*/

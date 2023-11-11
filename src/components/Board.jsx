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


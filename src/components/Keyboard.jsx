import React from "react";
import Key from "./Key";

export default function Keyboard(){
    const firstLetters = ['Q','W','E','R','T','Y','U','I','O','P'];
    const secondLetters = ['A','S','D','F','G','H','J','K','L'];
    const thirdLetters = ['Z','X','C','V','B','N','M'];

    return <div className="keyboard">
        <div className="first keyboardRow">
            {firstLetters.map((letter)=>{
                return <Key val={letter}/>;
            })}
        </div>
        <div className="second keyboardRow">
            {secondLetters.map((letter)=>{
                return <Key val={letter}/>;
            })}
        </div>
        <div className="third keyboardRow">
            <Key val="Enter" isBig={true}/>
            {thirdLetters.map((letter)=>{
                return <Key val={letter}/>;
            })}
            <Key val="Delete" isBig={true}/>
        </div>
    </div>
}

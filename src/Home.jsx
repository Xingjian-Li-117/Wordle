import React from "react";
import './App.css';
import { NavLink } from "react-router-dom";

export default function Home() {
    return (
      <div className="home">
        <h1>Welcome to Wordle Game</h1>
        <div className="buttons">
          <NavLink to="/game/easy"><button>Normal Game</button></NavLink>
          <NavLink to="/game/hard"><button>Hard Game</button></NavLink>
          <NavLink to="/rules"><button>Game Rules</button></NavLink>
        </div>
      </div>
    );
}

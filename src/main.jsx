import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App.jsx';
import HardGame from './App.jsx';
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import GameRules from './GameRules';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/rules',
    element: <GameRules />
  },
  /*
  {
    path: '/game/normal',
    element: <App />
  },
  */
  {
    path: '/game/:mode', 
    element: <App />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)


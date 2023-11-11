import { createContext, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'; 
import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { boardDefault, generateWordSet } from './Words';
import GameOver from './components/GameOver';


export const AppContext = createContext();

function App() {
  const { mode } = useParams(); 
  const [gameMode, setGameMode] = useState(mode); 
  const [board, setBoard] = useState(boardDefault(gameMode)); 
  const [curAttempt, setCurAttempt] = useState({attempt: 0, letterPos: 0});

  const [wordSet, setWordSet] = useState(new Set());
  const [correctWord, setCorrectWord] = useState("");

  const [gameOver, setGameOver] = useState({gameOver: false, guessedWord: false});

  const initializeGame = () => {
    generateWordSet(gameMode).then((words) => { // use game mode to generate word
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
      setBoard(boardDefault(gameMode)); // based on mode to reset the board
    });
  };

  useEffect(() => {
    initializeGame(); 
  }, [gameMode]); 

  function resetGame() {
    setBoard(boardDefault(gameMode)); // reset game based on current mode
    setCurAttempt({attempt: 0, letterPos: 0});
    setGameOver({gameOver: false, guessedWord: false});
    initializeGame();
  }

  function onSelect(val) {
    const maxLetters = gameMode === 'easy' ? 6 : 7;
    if (curAttempt.letterPos >= maxLetters) {
      alert("TOO MANY LETTERS!");
      return;
    }
    const newBoard = [...board];
    newBoard[curAttempt.attempt][curAttempt.letterPos] = val;
    setBoard(newBoard);
    setCurAttempt({...curAttempt, letterPos: curAttempt.letterPos + 1});
  }
  

  function onDelete(){
    if (curAttempt.letterPos === 0){return;}
    const newBoard = [...board];
    newBoard[curAttempt.attempt][curAttempt.letterPos-1] = "";
    setBoard(newBoard);
    setCurAttempt({...curAttempt, letterPos: curAttempt.letterPos-1});
    console.log("deleted");
  }

  function onEnter() {
    const maxLetters = gameMode === 'easy' ? 6 : 7;
    const maxAttempts = gameMode === 'easy' ? 6 : 5;
  
    if (curAttempt.letterPos < maxLetters) {
      alert("MORE LETTERS NEEDED!");
      return;
    }
  
    let curWord = "";
    for (let i = 0; i < maxLetters; i++) {
      curWord += board[curAttempt.attempt][i];
    }
  
    if (wordSet.has(curWord.toLowerCase())) {
      setCurAttempt({ attempt: curAttempt.attempt + 1, letterPos: 0 });
    } else {
      alert("INVALID WORD!");
      return;
    }
  
    if (curWord.toLowerCase() === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }
  
    if (curAttempt.attempt === maxAttempts - 1) {
      setGameOver({ gameOver: true, guessedWord: false });
    }
  }
  

  const toggleGameMode = () => setGameMode(gameMode === 'easy' ? 'hard' : 'easy'); 

  return (
    <div className="App">
      <nav>
        <h1>WORDLE</h1>
      </nav>
      <AppContext.Provider 
        value={{ 
          board, 
          setBoard,
          curAttempt,
          setCurAttempt,
          onSelect,
          onDelete, 
          onEnter,
          gameOver, 
          setGameOver,
          correctWord,
          resetGame, 
          gameMode,
        }}>
        <div className='gameBoard'>
        {gameOver.gameOver && <GameOver />}
        <Board />
        {!gameOver.gameOver && <Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;



/*

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [curAttempt, setCurAttempt] = useState({attempt: 0, letterPos: 0});

  const [wordSet, setWordSet] = useState(new Set());
  const [correctWord, setCorrectWord] = useState("");

  const [gameOver, setGameOver] = useState({gameOver: false, guessedWord: false});


  const initializeGame = () => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    });
  };

  useEffect(() => {
    initializeGame(); 
  }, []);

  function resetGame() {
    setBoard(boardDefault());  //reset board
    setCurAttempt({attempt: 0, letterPos: 0});
    setGameOver({gameOver: false, guessedWord: false});
    initializeGame();  // reser new words
  }


  function onSelect(val){
    if (curAttempt.letterPos > 5) {
      alert("TOO MANY LETTERS!");
      return;
    }
    const newBoard = [...board];
    newBoard[curAttempt.attempt][curAttempt.letterPos] = val;
    setBoard(newBoard);
    setCurAttempt({...curAttempt, letterPos: curAttempt.letterPos+1});
  }

  function onDelete(){
    if (curAttempt.letterPos === 0){return;}
    const newBoard = [...board];
    newBoard[curAttempt.attempt][curAttempt.letterPos-1] = "";
    setBoard(newBoard);
    setCurAttempt({...curAttempt, letterPos: curAttempt.letterPos-1});
    console.log("deleted");
  }

  function onEnter(){
    if (curAttempt.letterPos < 6){
      alert("MORE LETTERS NEEDED!");
      return;
    }

    let curWord = "";
    for(let i = 0; i < 6; i++){
      curWord += board[curAttempt.attempt][i];
    }


    if (wordSet.has(curWord.toLowerCase())){
      setCurAttempt({attempt: curAttempt.attempt+1, letterPos: 0});
    } else {
      alert("INVALID WORD!");
    }

    if (curWord.toLowerCase() === correctWord) {
      setGameOver({gameOver: true, guessedWord:true});
      return;
    }

    if (curAttempt.attempt === 5) {
      setGameOver({gameOver: true, guessedWord: false})
    }
  };


  return (
    <div className="App">
      <nav>
        <h1>WORDLE</h1>
      </nav>
      <AppContext.Provider 
        value={{ 
          board, 
          setBoard,
          curAttempt,
          setCurAttempt,
          onSelect,
          onDelete, 
          onEnter,
          gameOver, 
          setGameOver,
          correctWord,
          resetGame, 
        }}>
        <div className='gameBoard'>
        {gameOver.gameOver && <GameOver />}
        <Board />
        {!gameOver.gameOver && <Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;

*/
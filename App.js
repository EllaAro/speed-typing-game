import React, { useEffect } from 'react';
import './App.css';
import useWordGame from './hooks/useWordGame.js'

function App() {
  const {
    textareaRef, 
    text, 
    handleTextChange, 
    hasGameStarted, 
    timeRemaining, 
    startGame, 
    wordCount
  } = useWordGame();
  
  return (
      <div>
          <h1>How fast can you type?</h1>
            <textarea value={text} onChange={handleTextChange} disabled={!hasGameStarted} ref={textareaRef}/>
            <h4>Time reminaing: {timeRemaining}</h4>
            <button onClick={startGame} disabled={hasGameStarted}>Start</button>
            <h1>Word count: {wordCount}</h1>
      </div>
  )    
}

export default App
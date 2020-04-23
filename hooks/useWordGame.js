import { useState, useEffect, useRef } from 'react';

function useWordGame() {
  const STARTING_TIME = 5

  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [hasGameStarted, setHasGameStarted] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textareaRef = useRef(null);

  const handleTextChange = (event) => {
    setText(event.target.value);
  }

  const countWords = (text) => {
    const wordsArr = text.split(" ").filter(word => word !== "");
    return wordsArr.length;
  }

  const startGame = () => {
    setHasGameStarted(true);
    setTimeRemaining(STARTING_TIME);
    setText("");
    textareaRef.current.disabled = false
    textareaRef.current.focus();
  }

  const endGame = () => {
    setHasGameStarted(false);
    setWordCount(countWords(text));
  }

  useEffect(() => {
    if(timeRemaining > 0 && hasGameStarted) {
      setTimeout(()=> {
        setTimeRemaining(prevTimeRemaining => prevTimeRemaining-1)
      }, 1000);
    } else if(timeRemaining === 0) {
      endGame();
    }
  },[timeRemaining, hasGameStarted]);

  return {textareaRef, text, handleTextChange, hasGameStarted, timeRemaining, startGame, wordCount}
}
  export default useWordGame

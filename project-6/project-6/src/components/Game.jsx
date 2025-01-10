import { useState } from "react";
import "../App.css";
import "../Css/Game.css";
import {clsx} from 'clsx'
import { languages } from "../utils/languages";
import { words } from "../utils/words";
const Game = () => {
  const generateRandomWord = () =>{
    const randomIndex = Math.floor(Math.random() * words.length)
    return words[randomIndex]
  }
  const [word, setWord] = useState(() => generateRandomWord());
  const [guessedLetter, setGuessedLetters] = useState([]);
  const keyboard = "abcdefghijklmnopqrstuvwxyz".split("");
  const letters = word.split("");
  const wrongCount = guessedLetter.filter((letter) => !word.includes(letter)).length;

  const letterSection = letters.map((obj, index) => {
   const isTrue = guessedLetter.includes(obj);
   return isTrue ? (
    <span key={index}>{obj.toUpperCase()}</span>
    ) : <span key={index}></span> 
});
   
  const languageItems = languages.map((obj, index) => {
    const styles = { backgroundColor: obj.backgroundColor, color: obj.color };
    // console.log(index)
    const len = obj.length
    return index < wrongCount ? (<span key={index} className="l-items-lost" style={styles}>❌</span> ) : (
      <span key={index} className="l-item" style={styles}>
        {obj.name}
      </span>
    );
  });

  const keyboardItems = keyboard.map((obj, index) => {
    const isGuessed = guessedLetter.includes(obj);
    const isCorrect = isGuessed && word.includes(obj);
    const isWrong = isGuessed && !word.includes(obj);
    // console.log(isCorrect);
    const style = clsx({
      correct : isCorrect,
      wrong : isWrong
    })
    
    const styles = isCorrect ? {backgroundColor: "green"} : {backgroundColor : "red"};
    return (
      <button className={style} key={index} onClick={() => addGuessedLetters(obj)}>
        {obj.toUpperCase()}
      </button>
    );
  });

  const addGuessedLetters = (letter) => {
    setGuessedLetters((prev) =>
      prev.includes(letter) ? prev : [...prev, letter]
    );
  };

  const generateNewGame = () =>{
    setGuessedLetters([]);
  }
  // console.log(guessedLetter);
  // console.log(isGameWon);
  
  const isGameWon = word.split("").every((letter) => guessedLetter.includes(letter));
  // console.log(isGameWon)
  return (
    <main>
      <header className="header">
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word within 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      {
       wrongCount < 8 && isGameWon ? 
       ( 
        <section className="game-status">
        <h2>You win!</h2>
        <p>Well done! 🎉</p>
      </section> ) :
      (
        <section>
        {
          wrongCount > 8 ? (
            <>
            <section className="game-status1">
          <h2>You Lost!</h2>
          <p>Try Again! 🎉</p>
           </section>
            </>           
             ) : <><section style={{backgroundColor: "#1c1c1c"}} className="game-status1">
          <h2></h2>
          <p></p>
           </section></>
        }
        
      </section>
      )
      }
      
      <section className="l-style">{languageItems}</section>
      <section className="letter-container">{letterSection}</section>
      <section className="kb-container">{keyboardItems}</section>
      <div className="btn-container">
        <button onClick={generateNewGame} className="ng-btn">New Game</button>
      </div>
    </main>
  );
};
export default Game;

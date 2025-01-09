import { useRef, useState } from "react";
import "../css/tenzies.css";
import Die from "./Die";
import { useEffect } from "react";
import { nanoid } from "nanoid";
import React from 'react'
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

const Tenzies = () => {
  const [num, setNum] = useState(getRandomNumber());
  const btnRef = useRef(null);
  const { width, height } = useWindowSize()
  function isSame(){
    let check = num[0].value;
    return num.every(obj => obj.value == check);
  }
  const filled = num.every((obj) => obj.dieStatus == true );
  const gameWon = filled && isSame();
  const gameLoss = filled && !isSame();
  function getRandomNumber() {
    return new Array(10).fill(0).map(() => ({
      value: Math.floor(Math.random() * 6),
      dieStatus: false,
      id: nanoid(),
    }));
  }
  const handleRoll = () => {
    if(!gameWon && !gameLoss){
      setNum((oldDice) => {
        const newDice = oldDice.map((die) =>
          die.dieStatus === true
            ? die
            : { ...die, value: Math.floor(Math.random() * 6) }
        );
  
        return newDice;
      });
    }
    else if(gameWon || gameLoss){
      setNum(getRandomNumber());
    }
  };

  function hold(id) {
    // console.log(id);
    setNum((old) => {
      return old.map((die) => {
        return die.id == id ? { ...die, dieStatus: !die.dieStatus } : die;
      });
    });
  }
  console.log(num);
   useEffect(() =>{
      btnRef.current.focus();
   },[gameWon, gameLoss])
  return (
    <>
      <main className="main">
        {
          filled ? (<h1>{gameWon ? <>Congratulations! You Won the Game <Confetti
                                                                        width={width}
                                                                        height={height}/></> : "You Lost the Game"}</h1>) :  (<h1></h1>)
        }
        
        <div className="dice-container">
          {num.map((obj) => (
            <Die
              key={obj.id}
              data={obj.value}
              dieStatus={obj.dieStatus}
              id={obj.id}
              hold={hold}
            />
          ))}
        </div>
        <div>
          <button ref={btnRef} onClick={handleRoll} className="roll-btn">
            {(gameWon || gameLoss) ? "New Game" : "Roll"}
          </button>
        </div>
      </main>
    </>
  );
};
export default Tenzies;

import { useState } from "react";
import "../css/tenzies.css";
import Die from "./Die";
import { useEffect } from "react";
import { nanoid } from "nanoid"
const Tenzies = () => {
  const [num, setNum] = useState(getRandomNumber());
  const [roll, setRoll] = useState(false);
  function getRandomNumber() {
    return new Array(10).fill(0).map(() => ({
      value: Math.floor(Math.random() * 6),
      dieStatus: false,
      id: nanoid(),
    }));
  }
  const handleRoll = () => {
    setRoll(!roll);
  };
  useEffect(() => {
    const data = getRandomNumber();
    setNum(data);
  }, [roll]);
  console.log(getRandomNumber());

  return (
    <>
      <main className="main">
        <div className="dice-container">
          {num.map((obj) => (
            <Die key={obj.id} data={obj} />
          ))}
        </div>
        <div>
          <button onClick={handleRoll} className="roll-btn">
            Roll
          </button>
        </div>
      </main>
    </>
  );
};
export default Tenzies;

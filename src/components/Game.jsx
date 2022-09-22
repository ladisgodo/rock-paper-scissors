import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Game({ myChoice, score, setScore }) {
  const [house, setHouse] = useState("");
  const [playerWin, setPlayerWin] = useState("");

  function housePick() {
    const options = ["paper", "scissors", "rock"];
    setHouse(options[Math.floor(Math.random() * 3)]);
  }

  useEffect(() => {
    housePick();
  }, []);

  function result() {
    if (myChoice === "paper" && house === "paper") {
      setPlayerWin("draw");
    }
    if (myChoice === "paper" && house === "scissors") {
      setPlayerWin("lose");
      setScore(score - 1);
    }
    if (myChoice === "paper" && house === "rock") {
      setPlayerWin("win");
      setScore(score + 1);
    }
    if (myChoice === "scissors" && house === "scissors") {
      setPlayerWin("draw");
    }
    if (myChoice === "scissors" && house === "rock") {
      setPlayerWin("lose");
      setScore(score - 1);
    }
    if (myChoice === "scissors" && house === "paper") {
      setPlayerWin("win");
      setScore(score + 1);
    }
    if (myChoice === "rock" && house === "rock") {
      setPlayerWin("draw");
    }
    if (myChoice === "rock" && house === "paper") {
      setPlayerWin("lose");
      setScore(score - 1);
    }
    if (myChoice === "rock" && house === "scissors") {
      setPlayerWin("win");
      setScore(score + 1);
    }
  }

  useEffect(() => {
    result();
  }, [house]);

  return (
    <div className="game">
      <div className="game__you">
        <span className="text">You Picked</span>
        <div className={`icon icon--${myChoice}`}></div>
      </div>
      {playerWin === "win" && (
        <div className="game__play">
          <span className="text">You Win</span>
          <Link to="/" className="play_again" onClick={() => setHouse()}>
            Play Again
          </Link>
        </div>
      )}
      {playerWin === "lose" && (
        <div className="game__play">
          <span className="text">You Lose</span>
          <Link to="/" className="play_again" onClick={() => setHouse()}>
            Play Again
          </Link>
        </div>
      )}
      {playerWin === "draw" && (
        <div className="game__play">
          <span className="text">Draw</span>
          <Link to="/" className="play_again" onClick={() => setHouse()}>
            Play Again
          </Link>
        </div>
      )}
      <div className="game__house">
        <span className="text">The House Picked</span>
        <div className={`icon icon--${house}`}></div>
      </div>
    </div>
  );
}

export default Game;

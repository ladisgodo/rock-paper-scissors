import React from "react";
import { Link } from "react-router-dom";
import triangle from "../images/bg-triangle.svg";

function Play({ setMyChoice }) {
  function setChoice(e) {
    setMyChoice(e.target.id);
  }

  return (
    <div className="play">
      <img src={triangle} alt="" className="triangle" />
      <div className="items">
        <Link to="/game">
          <div
            id="paper"
            onClick={(e) => setChoice(e)}
            className="icon icon__paper"
          ></div>
        </Link>
        <Link to="/game">
          <div
            id="scissors"
            onClick={(e) => setChoice(e)}
            className="icon icon__scissors"
          ></div>
        </Link>
        <Link to="/game">
          <div
            id="rock"
            onClick={(e) => setChoice(e)}
            className="icon icon__rock"
          ></div>
        </Link>
      </div>
    </div>
  );
}

export default Play;

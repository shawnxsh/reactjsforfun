import React from "react";
import { BsRecord, BsX } from "react-icons/bs";
import hoverSound from "../sound/hover.mp3";
import clickSound from "../sound/click.mp3";

const PlayerChoosing = ({ setInPlayerChoose, setCurrentPlayer }) => {
  const hoverEffect = (num) => {
    const player = document.getElementsByClassName("player")[num];
    player.classList.toggle("hoverEffect");
  };

  return (
    <div className="playerChoosing">
      <div
        className="player"
        onClick={() => {
          new Audio(clickSound).play();
          setCurrentPlayer(false);
          setInPlayerChoose(false);
        }}
        onMouseEnter={() => {
          new Audio(hoverSound).play();
          hoverEffect(0);
        }}
        onMouseLeave={() => {
          hoverEffect(0);
        }}
      >
        <BsX style={{ color: "gold", width: "100%", height: "100%" }} />
      </div>
      <div
        className="player"
        onClick={() => {
          new Audio(clickSound).play();
          setCurrentPlayer(true);
          setInPlayerChoose(false);
        }}
        onMouseEnter={() => {
          new Audio(hoverSound).play();
          hoverEffect(1);
        }}
        onMouseLeave={() => {
          hoverEffect(1);
        }}
      >
        <BsRecord style={{ color: "gold", width: "85%", height: "85%" }} />
      </div>
    </div>
  );
};

export default PlayerChoosing;

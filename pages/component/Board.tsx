import React from "react";

type Player = {
  activePlayer: string;

  clicked: string;
  winner: string;
  value: string;
  onClick: () => void;
};

const Board = ({ activePlayer, onClick, value, winner }: Player) => {
  if (!value) {
    return (
      <button
        className='square'
        disabled={Boolean(winner)}
        onClick={onClick}
      ></button>
    );
  }
  return (
    <button
      disabled
      className={`square ${value === "O" ? "square_O" : "square_X"}`}
    >
      {value}
    </button>
  );
};

export default Board;

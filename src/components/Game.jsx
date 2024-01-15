import Scoreboard from "./Scoreboard";
import { useState } from "react";

const Game = ({
  currentCards,
  setCurrentCards,
  setModalOpen,
  setIsOver,
  score,
  setScore,
}) => {
  const maxCards = 5;

  const [clickedCards, setClickedCards] = useState([]);

  const handleClick = (id) => {
    if (clickedCards.includes(id)) {
      setCurrentCards([]);
      setModalOpen(true);
      setIsOver(true);

      return console.log("gameover");
    }

    setClickedCards(clickedCards.concat(id));
    setCurrentCards(currentCards.sort((a, b) => 0.5 - Math.random()));
    setScore(score + 1);
  };

  return (
    <>
      <Scoreboard score={score} maxScore={maxCards} />
      <div id="cards-container">
        {currentCards &&
          currentCards.map((card) => (
            <img
              key={card.id}
              onClick={() => handleClick(card.id)}
              src={card.images.small}
            ></img>
          ))}
      </div>
    </>
  );
};

export default Game;

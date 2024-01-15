import Scoreboard from "./Scoreboard";
import Card from "./Card";
import { useState } from "react";

const Game = ({
  currentCards,
  setCurrentCards,
  correctCards,
  setCorrectCards,
  setModalOpen,
  setModalText,
  setIsOver,
  score,
  setScore,
  highscore,
  setHighscore,
  maxCards,
}) => {
  const [clickedCards, setClickedCards] = useState([]);
  const [flip, setFlip] = useState(false);

  const handleClick = (id) => {
    setTimeout(() => {
      if (clickedCards.includes(id)) {
        if (score > highscore) {
          setHighscore(score);
        }
        setClickedCards([]);
        setCurrentCards([]);
        setScore(0);
        setModalOpen(true);
        setModalText(["Game over!", "Play again"]);
        setIsOver(true);
      } else if (correctCards === maxCards - 1) {
        setClickedCards([]);
        setCurrentCards([]);
        setScore(score + 1);
        setModalOpen(true);
        setModalText(["You win!", "Continue"]);
        setIsOver(true);
      } else {
        setClickedCards(clickedCards.concat(id));
        let tempCards = [...currentCards];
        setCurrentCards(tempCards.sort((a, b) => 0.5 - Math.random()));
        setCorrectCards();
        setScore(score + 1);
        setCorrectCards(correctCards + 1);
      }
    }, 1500);
  };

  const handleFlip = (event) => {
    setFlip(true);
    event.target.parentElement.parentElement.classList.add("active");
    setTimeout(() => {
      setFlip(false);
      event.target.parentElement.parentElement.classList.remove("active");
    }, 1000);
  };

  return (
    <>
      <Scoreboard score={score} highscore={highscore} maxScore={maxCards} />
      <div id="cards-container">
        {currentCards &&
          currentCards.map((card) => (
            <Card
              card={card}
              handleClick={handleClick}
              flip={flip}
              handleFlip={handleFlip}
            ></Card>
          ))}
      </div>
    </>
  );
};

export default Game;

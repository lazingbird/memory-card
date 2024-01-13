import { useState, useEffect, useRef } from "react";

import tcgServices from "./services/tcg";

import Scoreboard from "./components/Scoreboard";

function App() {
  const maxCards = 5;
  const maxNumber = 905;

  const cardsFetched = useRef(false);

  const [currentCards, setCurrentCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [isOver, setIsOver] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (cardsFetched.current) return;
    cardsFetched.current = true;
    getStartingCards(maxCards);
  }, []);

  const getRandomNumbers = (quantity) => {
    let numbers = [];

    for (let index = 0; index < quantity; index++) {
      numbers.push(Math.floor(Math.random() * maxNumber));
    }

    return numbers;
  };

  const getOneCard = async (number) => {
    return await tcgServices.getCard(number);
  };

  const getStartingCards = async (quantity) => {
    let numbers = getRandomNumbers(quantity);

    let cards = await Promise.all(
      numbers.map(async (number) => await getOneCard(number))
    );

    setCurrentCards(cards);
  };

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

  const handleReset = () => {
    setIsOver(false);
    setModalOpen(false);
    setScore(0);
    getStartingCards(maxCards);
  };

  return (
    <>
      <div id="game-container" className={modalOpen ? "bg" : ""}>
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
      </div>
      {isOver && (
        <div id="gameover-modal">
          <div id="modal-container">
            <h2 id="gameover-text">GAME OVER!</h2>
            <button id="gameover-button" onClick={() => handleReset()}>
              Play Again
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

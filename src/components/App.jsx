import { useState, useEffect, useRef } from "react";

import tcgServices from "../services/tcg";
import helpers from "./helpers";
import Game from "./Game";
import Modal from "./Modal";
import Rules from "./Rules";

function App() {
  const maxCards = 6;

  const cardsFetched = useRef(false);

  const [gameStarted, setGameStarted] = useState(false);
  const [currentCards, setCurrentCards] = useState(null);
  const [correctCards, setCorrectCards] = useState(0);
  const [isOver, setIsOver] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState([]);
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);

  useEffect(() => {
    if (cardsFetched.current) return;
    cardsFetched.current = true;
    getStartingCards(maxCards);
  }, []);

  const getOneCard = async (number) => {
    return await tcgServices.getCard(number);
  };

  const getStartingCards = async (quantity) => {
    let numbers = helpers.getRandomNumbers(quantity);

    let cards = await Promise.all(
      numbers.map(async (number) => await getOneCard(number))
    );

    setCurrentCards(cards);
  };

  const handleReset = () => {
    setHighscore(highscore);
    setScore(score);
    setIsOver(false);
    setModalOpen(false);
    setCurrentCards(null);
    getStartingCards(maxCards);
    setCorrectCards(0);
  };

  if (!gameStarted) {
    return <Rules setGameStarted={setGameStarted} />;
  }

  if (!currentCards) {
    return (
      <>
        <div className="lds-dual-ring"></div>
        <div id="bg-image"></div>;
      </>
    );
  }

  return (
    <>
      <div id="bg-image"></div>
      <div id="game-container" className={modalOpen ? "bg" : ""}>
        <Game
          score={score}
          highscore={highscore}
          setScore={setScore}
          setHighscore={setHighscore}
          setIsOver={setIsOver}
          setModalOpen={setModalOpen}
          setModalText={setModalText}
          currentCards={currentCards}
          setCurrentCards={setCurrentCards}
          maxCards={maxCards}
          setCorrectCards={setCorrectCards}
          correctCards={correctCards}
        />
        <h1>{currentCards.length > 0 && `${correctCards}/${maxCards}`}</h1>
      </div>
      <Modal modalText={modalText} isOver={isOver} handleReset={handleReset} />
    </>
  );
}

export default App;

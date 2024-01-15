import { useState, useEffect, useRef } from "react";

import tcgServices from "./services/tcg";
import helpers from "./components/helpers";
import Game from "./components/Game";
import Modal from "./components/Modal";

function App() {
  const maxCards = 5;

  const cardsFetched = useRef(false);

  const [currentCards, setCurrentCards] = useState([]);
  const [isOver, setIsOver] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [score, setScore] = useState(0);

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
    setIsOver(false);
    setModalOpen(false);
    setScore(0);
    getStartingCards(maxCards);
  };

  return (
    <>
      <div id="game-container" className={modalOpen ? "bg" : ""}>
        <Game
          score={score}
          setScore={setScore}
          setIsOver={setIsOver}
          setModalOpen={setModalOpen}
          currentCards={currentCards}
          setCurrentCards={setCurrentCards}
        />
      </div>
      <Modal isOver={isOver} handleReset={handleReset} />
    </>
  );
}

export default App;

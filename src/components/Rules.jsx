const Rules = ({ setGameStarted }) => {
  return (
    <>
      <div id="bg-image"></div>;
      <div id="rules-container">
        <h1>Pokemon TCG Memory Game</h1>
        <h2>How to play:</h2>
        <ul>
          <li>Each round has six different Pokémon TCG cards;</li>
          <li>Don't click the same card twice;</li>
          <li>
            You complete a round after selecting all cards without repeating;
          </li>
          <li>Complete more rounds to raise your highscore.</li>
        </ul>
        <button onClick={() => setGameStarted(true)}>Start Game</button>
      </div>
    </>
  );
};

export default Rules;

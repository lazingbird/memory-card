const Scoreboard = ({ score, highscore, maxScore }) => {
  return (
    <div id="scoreboard">
      <h1>
        SCORE: {score} | <span>HIGH SCORE: {highscore} </span>
      </h1>
    </div>
  );
};

export default Scoreboard;

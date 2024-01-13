const Scoreboard = ({ score, maxScore }) => {
  return (
    <div id="scoreboard">
      <h1>
        Score: {score}/{maxScore}
      </h1>
    </div>
  );
};

export default Scoreboard;

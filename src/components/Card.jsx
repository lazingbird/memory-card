import back from "../assets/images/tcgback.png";

const Card = ({ card, flip, handleFlip, handleClick }) => {
  return (
    <div
      key={`${card.id}_container`}
      tabIndex="1"
      className={"flip-card"}
      onClick={!flip ? (event) => handleFlip(event) : undefined}
    >
      <div key={`${card.id}_inner`} className="flip-card-inner">
        <img
          className="flip-card-front"
          key={card.id}
          onClick={!flip ? () => handleClick(card.id) : undefined}
          src={card.images.small}
        ></img>
        <img
          key={`${card.id}_back`}
          className="flip-card-back"
          src={back}
        ></img>
      </div>
    </div>
  );
};

export default Card;

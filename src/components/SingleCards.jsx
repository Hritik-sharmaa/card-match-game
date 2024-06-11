import React from "react";

const SingleCards = ({ card, handleChoices, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoices(card);
    }
  };

  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={handleClick}>
      <div className="inner">
        <img src={card.src} className="front" alt="card front" />
        <img
          src="../public/card-back-cover.png"
          className="back"
          alt="card back"
        />
      </div>
    </div>
  );
};

export default SingleCards;

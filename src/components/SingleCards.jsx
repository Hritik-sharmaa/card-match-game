import React from "react";

const SingleCards = ({ card }) => {
  return (
    <div className="card">
      <div>
        <img src={card.src} className="front" />
        <img src="../public/card-back-cover.png" className="back" />
      </div>
    </div>
  );
};

export default SingleCards;

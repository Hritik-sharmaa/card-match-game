import { useState } from "react";
import SingleCards from "./components/SingleCards";

const cardImages = [
  { src: "./public/chariot.png" },
  { src: "./public/fool.png" },
  { src: "./public/judgement.png" },
  { src: "./public/magican.png" },
  { src: "./public/strength.png" },
  { src: "./public/tower.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    // console.log(shufflecards);
    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards, turns);
  return (
    <>
      <div className="main">
        <h1>Magic Card Game</h1>
        <button onClick={shuffleCards}>New Game</button>
        <div className="card-grid">
          {cards.map((card) => (
            <SingleCards card={card} key={card.id}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

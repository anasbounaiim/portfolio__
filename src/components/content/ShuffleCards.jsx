import React, { useState, useEffect } from "react";
import {
  FaCat,
  FaCar,
  FaCocktail,
  FaDragon,
  FaFish,
  FaGuitar,
  FaLeaf,
  FaRocket,
} from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";

const MemoryCardGame = () => {
  // Fun icons array
  const icons = [
    { id: 1, icon: <FaCat size={30} className="text-orange-400" /> },
    { id: 2, icon: <FaCar size={30} className="text-blue-400" /> },
    { id: 3, icon: <FaCocktail size={30} className="text-pink-400" /> },
    { id: 4, icon: <FaDragon size={30} className="text-purple-500" /> },
    { id: 5, icon: <FaFish size={30} className="text-teal-500" /> },
    { id: 6, icon: <FaGuitar size={30} className="text-yellow-400" /> },
    { id: 7, icon: <FaLeaf size={30} className="text-green-400" /> },
    { id: 8, icon: <FaRocket size={30} className="text-red-500" /> },
  ];

  const shuffleIcons = () => {
    const duplicatedIcons = [...icons, ...icons];
    return duplicatedIcons.sort(() => Math.random() - 0.5);
  };

  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    setCards(shuffleIcons());
  }, []);

  const handleCardClick = (index) => {
    if (matchedCards.includes(index) || flippedCards.includes(index)) return;

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [firstIndex, secondIndex] = newFlippedCards;
      const firstCard = cards[firstIndex];
      const secondCard = cards[secondIndex];

      if (firstCard.id === secondCard.id) {
        setMatchedCards((prev) => [...prev, firstIndex, secondIndex]);
      }

      setTimeout(() => {
        setFlippedCards([]);
      }, 1000);

      setAttempts((prev) => prev + 1);
    }
  };

  const resetGame = () => {
    setCards(shuffleIcons());
    setFlippedCards([]);
    setMatchedCards([]);
    setAttempts(0);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Memory Card Game</h1>
      <div className="flex items-center text-lg mb-4">
        <p className="mr-4">Attempts: {attempts}</p>
        <p className="mr-4">Matches: {matchedCards.length / 2}</p>
        <button onClick={resetGame} className="text-gray-800 hover:text-gray-600">
          <FiRefreshCw size={24} />
        </button>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`w-[5rem] h-20 bg-gray-300 border rounded-md flex items-center justify-center text-2xl font-bold cursor-pointer shadow-md ${
              flippedCards.includes(index) || matchedCards.includes(index)
                ? "bg-white border-gray-400"
                : ""
            }`}
            onClick={() => handleCardClick(index)}
          >
            {flippedCards.includes(index) || matchedCards.includes(index)
              ? card.icon
              : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryCardGame;

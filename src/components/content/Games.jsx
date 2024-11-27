import React, { useState } from "react";
import XOGame from "./XOGame"; // Import XOGame component
import Snake from "./Snake"; // Import XOGame component

const Games = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  const gamesList = [
    { id: 1, name: "Tic-Tac-Toe", component: <XOGame /> , color: "bg-red"},
    { id: 2, name: "Snake", component: <Snake /> , color: "bg-green"},
    // Add more games here as needed
  ];

  const selectGame = (game) => {
    setSelectedGame(game);
  };

  const backToLibrary = () => {
    setSelectedGame(null);
  };

  return (
    <div className="bg-white text-black flex flex-col items-center justify-center">
      {selectedGame ? (
        <div className="w-full ">
          <button
            onClick={backToLibrary}
            className="px-4 py-2 mt-9 ml-4 flex items-start bg-blue-500 rounded-md text-white font-bold">
            {"<==="}
          </button>
          {selectedGame.component}
        
        </div>
      ) : (
        <>
          <h1 className="text-4xl font-bold mb-6 mt-16">Games Library</h1>
          <div className="grid grid-cols-2 gap-6">
            {gamesList.map((game) => (
              <div
                key={game.id}
                className={`cursor-pointer ${game.color}-500 text-white flex justify-center items-center h-14 w-60  rounded-md shadow-lg text-center hover:${game.color}-600`}
                onClick={() => selectGame(game)}
              >
                <h2 className="text-2xl font-semibold">{game.name}</h2>
              </div>
              
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Games;

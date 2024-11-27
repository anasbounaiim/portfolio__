import React, { useState, useEffect } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import "animate.css";

import XOGame from "./XOGame";
import Snake from "./Snake";
import RockPaperScissors from "./RockPaperScissors";
import ShuffleCards from "./ShuffleCards";

const Games = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [isLoadingContent, setIsLoadingContent] = useState(true);

  useEffect(() => {
    // Simulate loading by setting isLoadingContent to false after a delay
    const loadingTimeout = setTimeout(() => {
      setIsLoadingContent(false);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(loadingTimeout);
  }, []);

  const gamesList = [
    { id: 1, name: "Tic-Tac-Toe", component: <XOGame />, color: "bg-red-500" },
    { id: 2, name: "Snake", component: <Snake />, color: "bg-green-500" },
    { id: 3, name: "Rock Paper Scissors", component: <RockPaperScissors />, color: "bg-blue-500" },
    { id: 4, name: "Memory Card Game", component: <ShuffleCards />, color: "bg-pink-500" },
  ];

  const selectGame = (game) => {
    setSelectedGame(game);
  };

  const backToLibrary = () => {
    setSelectedGame(null);
  };

  return (
    <>
      {isLoadingContent ? (
        <div className="flex items-center justify-center h-[600px]">
          <div
            className="inline-block h-14 w-14 animate-spin rounded-full border-[6px] border-solid border-blue-600 border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="absolute bg-blue-600 -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 clip-[rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      ) : (
        <div className="bg-white text-black flex flex-col items-center justify-center ">
          {selectedGame ? (
            <div className="w-full">
              <button
                onClick={backToLibrary}
                className="text-5xl mt-7 ml-4 flex items-start text-black rounded-md font-bold"
              >
                <IoMdArrowRoundBack />
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
                    className={`cursor-pointer ${game.color} text-white flex justify-center items-center h-40 w-40 rounded-lg shadow-lg text-center hover:animate__animated hover:animate__bounce`}
                    onClick={() => selectGame(game)}
                  >
                    <h2 className="text-xl font-bold">{game.name}</h2>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Games;

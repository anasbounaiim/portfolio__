import React, { useState, useEffect } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import "animate.css";
import { FaPlay } from "react-icons/fa";


import XOGame from "./XOGame";
import Snake from "./Snake";
import RockPaperScissors from "./RockPaperScissors";
import ShuffleCards from "./ShuffleCards";
import PingPong from "./PingPong";
import Spaceinvaders from "./Spaceinvaders"

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
    {
      id: 1,
      name: "Tic-Tac-Toe",
      description: "A classic strategy game where two players aim to align three X's or O's in a row.",
      component: <XOGame />,
      color: "bg-red-500",
    },
    {
      id: 2,
      name: "Snake",
      description: "Guide the snake to eat food while avoiding walls and its own tail.",
      component: <Snake />,
      color: "bg-green-500",
    },
    {
      id: 3,
      name: "Rock Paper Scissors",
      description: "Challenge the computer to the timeless game of strategy and luck.",
      component: <RockPaperScissors />,
      color: "bg-blue-500",
    },
    {
      id: 4,
      name: "Memory Card Game",
      description: "Test your memory by matching pairs of cards in as few moves as possible.",
      component: <ShuffleCards />,
      color: "bg-pink-500",
    },
    {
      id: 5,
      name: "PingPong",
      description: "Play the fast-paced arcade classic against the computer.",
      component: <PingPong />,
      color: "bg-purple-500",
    },
    {
      id: 6,
      name: "Space Invaders",
      description: "Defend the galaxy from waves of alien invaders in this retro arcade game.",
      component: <Spaceinvaders />,
      color: "bg-cyan-500",
    },
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
              <h1 className="text-4xl font-bold mb-6 mt-12">Games Library</h1>
              <div className="grid grid-cols-3 gap-4">
  {gamesList.map((game) => (
    <div
      key={game.id}
      className="cursor-pointer bg-white shadow-md border w-48 rounded-lg hover:shadow-xl transition-shadow pt-2 px-3 pb-3 flex flex-col items-center group"
      onClick={() => selectGame(game)}
    >
      {/* Game Card */}
      <div
        className={`h-24 w-full rounded-md ${game.color} flex items-center justify-center text-4xl font-bold text-white relative`}
      >
        {/* Default letter */}
        <span className="absolute inset-0 flex items-center justify-center group-hover:hidden">
          {game.name.charAt(0)}
        </span>
        {/* Play icon on hover */}
        <span className="absolute inset-0 flex items-center justify-center hidden group-hover:flex">
          <FaPlay className="text-white text-3xl" />
        </span>
      </div>
      <div className="text-center mt-4">
        <p className="text-lg font-semibold">{game.name}</p>
        {/* Description */}
        <p className="text-sm text-gray-600 mt-2">{game.description}</p>
      </div>
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

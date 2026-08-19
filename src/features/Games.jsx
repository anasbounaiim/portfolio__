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
  const [previewGame, setPreviewGame] = useState(null);
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
    {
      id: 7,
      name: "Subuzlai Game",
      description: "Enter a polished pixel-art browser game with a retro arcade atmosphere.",
      externalUrl: "https://subuzlai-game.vercel.app/",
      color: "bg-fuchsia-700",
    },
    {
      id: 8,
      name: "Moroccan Dama",
      description: "Play a Moroccan-inspired version of the classic strategy game of checkers.",
      externalUrl: "https://dama-game-rosy.vercel.app/",
      color: "bg-rose-700",
    },
  ];

  const orderedGames = [
    ...gamesList.filter((game) => game.externalUrl),
    ...gamesList.filter((game) => !game.externalUrl),
  ];
  

  const selectGame = (game) => {
    if (window.matchMedia("(min-width: 768px)").matches) {
      if (game.externalUrl) window.open(game.externalUrl, "_blank", "noopener,noreferrer");
      else setSelectedGame(game);
      return;
    }
    setPreviewGame(game);
  };

  const launchGame = (game) => {
    if (game.externalUrl) window.open(game.externalUrl, "_blank", "noopener,noreferrer");
    else setSelectedGame(game);
    setPreviewGame(null);
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
        <div className="flex w-full min-w-0 flex-col items-center justify-center bg-white text-black">
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
              <h1 className="mb-6 mt-5 px-2 text-center text-3xl font-bold sm:mt-12 sm:text-4xl">Games Library</h1>
              <div className="grid w-full grid-cols-3 gap-x-2 gap-y-5 px-3 md:gap-4 md:px-0">
  {orderedGames.map((game) => (
    <div
      key={game.id}
      className="group flex min-w-0 w-full cursor-pointer flex-col bg-transparent md:w-48 md:items-center md:rounded-lg md:border md:bg-white md:px-3 md:pb-3 md:pt-2 md:shadow-md md:transition-shadow md:hover:shadow-xl"
      onClick={() => selectGame(game)}
    >
      {/* Game Card */}
      <div
        className={`relative flex aspect-[3/4] w-full items-center justify-center rounded-lg ${game.color} text-4xl font-bold text-white shadow-md md:h-24 md:aspect-auto md:rounded-md md:shadow-none`}
      >
        {/* Default letter */}
        <span className="absolute inset-0 flex items-center justify-center drop-shadow-lg group-hover:hidden">
          {game.name.charAt(0)}
        </span>
        {/* Play icon on hover */}
        <span className="absolute inset-0 flex items-center justify-center hidden group-hover:flex">
          <FaPlay className="text-white text-3xl" />
        </span>
      </div>
      <div className="mt-1 w-full min-w-0 text-left md:mt-4 md:text-center">
        <p className="line-clamp-2 break-words text-sm font-semibold leading-tight md:text-lg">{game.name}</p>
        {/* Description */}
        <p className="mt-2 hidden break-words text-sm leading-relaxed text-gray-600 md:block">{game.description}</p>
      </div>
    </div>
  ))}
</div>

              {previewGame && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 md:hidden" onClick={() => setPreviewGame(null)}>
                  <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
                    <div className={`flex h-48 items-center justify-center ${previewGame.color} text-7xl font-bold text-white`}>
                      {previewGame.name.charAt(0)}
                    </div>
                    <div className="p-5">
                      <h2 className="text-2xl font-bold">{previewGame.name}</h2>
                      <p className="mt-2 leading-relaxed text-gray-600">{previewGame.description}</p>
                      <div className="mt-5 flex gap-3">
                        <button onClick={() => setPreviewGame(null)} className="flex-1 rounded-lg bg-gray-200 px-4 py-3 font-semibold">Close</button>
                        <button onClick={() => launchGame(previewGame)} className="flex-1 rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white">{previewGame.externalUrl ? "Open" : "Play"}</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </>
          )}
        </div>
      )}
    </>
  );
};

export default Games;

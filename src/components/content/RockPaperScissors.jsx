import React, { useState } from "react";
import { FaRegHandRock, FaRegHandPaper, FaRegHandScissors } from "react-icons/fa";

const RockPaperScissors = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [ties, setTies] = useState(0);

  const choices = [
    { id: "rock", icon: <FaRegHandRock size={60} /> },
    { id: "paper", icon: <FaRegHandPaper size={60} /> },
    { id: "scissors", icon: <FaRegHandScissors size={60} /> },
  ];

  const determineWinner = (player, computer) => {
    if (player === computer) {
      setTies((prevTies) => prevTies + 1);
      return "It's a Tie!";
    }
    if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      setPlayerScore((prevScore) => prevScore + 1);
      return "You Win!";
    }
    setComputerScore((prevScore) => prevScore + 1);
    return "Computer Wins!";
  };

  const handlePlayerChoice = (choice) => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computer = choices[randomIndex].id;

    setPlayerChoice(choice);
    setComputerChoice(null); // Temporarily hide computer choice for suspense
    setResult("Wait...");

    setTimeout(() => {
      setComputerChoice(computer);
      const gameResult = determineWinner(choice, computer);
      setResult(gameResult);
    }, 1000); // 1-second delay
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult("");
    setPlayerScore(0);
    setComputerScore(0);
    setTies(0);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Rock Paper Scissors</h1>

      <div className="flex items-center justify-between w-80 mb-8">
        <div className="flex flex-col text-center">
          {playerChoice ? (
            choices.find((choice) => choice.id === playerChoice).icon
          ) : (
            <FaRegHandRock size={50} className="text-gray-300" />
          )}
          <p className="mt-2 text-xl font-medium text-gray-800">You</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          {computerChoice ? (
            choices.find((choice) => choice.id === computerChoice).icon
          ) : (
            <FaRegHandRock size={50} className="text-gray-300" />
          )}
          <p className="mt-2 text-xl font-medium text-gray-800">Computer</p>
        </div>
      </div>

<div className="h-16 w-64 text-center ">

      {result && (
        <h2 className="text-3xl font-bold mb-6 text-gray-800">{result}</h2>
      )}
</div>

      <div className="flex space-x-8">
        {choices.map((choice) => (
          <button
            key={choice.id}
            className="flex flex-col items-center justify-center hover:text-gray-800 focus:outline-none"
            onClick={() => handlePlayerChoice(choice.id)}
          >
            {choice.icon}
            <span className="mt-2 text-sm font-medium capitalize">{choice.id}</span>
          </button>
        ))}
      </div>

      <div className="flex justify-center mt-8 space-x-4">
        <div className="bg-red-500 text-white px-4 py-2 text-lg rounded-md">
          Player Score: {playerScore}
        </div>
        <div className="bg-gray-500 text-white px-4 py-2 text-lg rounded-md">
          Ties: {ties}
        </div>
        <div className="bg-green-500 text-white px-4 py-2 text-lg rounded-md">
          Computer Score: {computerScore}
        </div>
      </div>

      <button
        onClick={resetGame}
        className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg rounded-md"
      >
        Restart Game
      </button>
    </div>
  );
};

export default RockPaperScissors;

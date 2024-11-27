import React, { useState } from "react";

const XOGame = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); // 3x3 grid
  const [winner, setWinner] = useState(null);
  const [score, setScore] = useState({ X: 0, O: 0, Draws: 0 }); // Track scores

  // Winning combinations
  const winningCombinations = [
    [0, 1, 2], // Row 1
    [3, 4, 5], // Row 2
    [6, 7, 8], // Row 3
    [0, 3, 6], // Column 1
    [1, 4, 7], // Column 2
    [2, 5, 8], // Column 3
    [0, 4, 8], // Diagonal 1
    [2, 4, 6], // Diagonal 2
  ];

  // Check for a winner
  const checkWinner = (newBoard) => {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        return newBoard[a];
      }
    }
    return newBoard.every((cell) => cell) ? "Draw" : null; // Check for a draw
  };

  // Computer makes a strategic move
  const computerMove = (newBoard) => {
    // Check if the CPU can win in the next move
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      const line = [newBoard[a], newBoard[b], newBoard[c]];

      if (line.filter((cell) => cell === "O").length === 2 && line.includes(null)) {
        const emptyIndex = combination[line.indexOf(null)];
        newBoard[emptyIndex] = "O";
        return;
      }
    }

    // Check if the CPU can block the player from winning
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      const line = [newBoard[a], newBoard[b], newBoard[c]];

      if (line.filter((cell) => cell === "X").length === 2 && line.includes(null)) {
        const emptyIndex = combination[line.indexOf(null)];
        newBoard[emptyIndex] = "O";
        return;
      }
    }

    // Otherwise, pick a random move
    const availableIndices = newBoard
      .map((cell, index) => (cell === null ? index : null))
      .filter((index) => index !== null);

    if (availableIndices.length > 0) {
      const randomIndex =
        availableIndices[Math.floor(Math.random() * availableIndices.length)];
      newBoard[randomIndex] = "O";
    }
  };

  // Handle cell click
  const handleCellClick = (index) => {
    if (board[index] || winner) return; // Prevent clicking on taken cells or after the game ends

    const newBoard = [...board];
    newBoard[index] = "X"; // Player's move
    setBoard(newBoard);

    // Delay CPU's move
    setTimeout(() => {
      const updatedBoard = [...newBoard];
      computerMove(updatedBoard);

      // Set the board first to reflect the last move
      setBoard(updatedBoard);

      // Check for winner after updating the board
      const gameWinner = checkWinner(updatedBoard);
      if (gameWinner) {
        setTimeout(() => {
          updateScore(gameWinner); // Update score after winner is displayed
          setWinner(gameWinner);
        }, 500); // Delay for UI update
      }
    }, 1000); // 1-second delay
  };

  // Update the score
  const updateScore = (result) => {
    if (result === "X") {
      setScore((prevScore) => ({ ...prevScore, X: prevScore.X + 1 }));
    } else if (result === "O") {
      setScore((prevScore) => ({ ...prevScore, O: prevScore.O + 1 }));
    } else if (result === "Draw") {
      setScore((prevScore) => ({ ...prevScore, Draws: prevScore.Draws + 1 }));
    }
  };

  // Reset the game
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
  };

  return (
    <div className="bg-white text-gray-900 flex flex-col justify-center items-center py-8">
      <h2 className="text-5xl font-bold mb-6">Tic-Tac-Toe</h2>

      {/* Game Board */}
      <div className="grid grid-cols-3 gap-3">
        {board.map((cell, index) => (
          <button
            key={index}
            className={`w-20 h-20 flex justify-center items-center rounded-lg text-4xl font-bold shadow-md ${
              cell === "X"
                ? "bg-red-500 text-white"
                : cell === "O"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-400"
            }`}
            onClick={() => handleCellClick(index)}
            disabled={winner || cell}
          >
            {cell}
          </button>
        ))}
      </div>

      {/* Winner Message */}
      {winner && (
        <p className="text-xl font-bold mt-4">
          {winner === "Draw" ? "It's a Draw!" : `Winner: ${winner}`}
        </p>
      )}

      {/* Score Panel */}
      <div className="mt-6 flex justify-center space-x-4">
        <div className="bg-red-500 text-white px-4 py-2 text-lg rounded-md">
          X (You): {score.X}
        </div>
        <div className="bg-gray-500 text-white px-4 py-2 text-lg rounded-md">
          Ties: {score.Draws}
        </div>
        <div className="bg-green-500 text-white px-4 py-2 text-lg rounded-md">
          O (CPU): {score.O}
        </div>
      </div>

      {/* Restart Button */}
      <button
        onClick={resetGame}
        className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg rounded-md"
      >
        Restart Game
      </button>
    </div>
  );
};

export default XOGame;

import React, { useState, useEffect } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { BiSolidCheese } from "react-icons/bi";

const SnakeGame = () => {
  const [snake, setSnake] = useState([[5, 5]]); // Initial snake position
  const [food, setFood] = useState([10, 10]); // Initial food position
  const [direction, setDirection] = useState(null); // Direction is null initially
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0); // Track the score
  const [isGameStarted, setIsGameStarted] = useState(false); // Track if the game has started
  const gridSize = 20;

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (!isGameStarted) setIsGameStarted(true); // Start the game on first keypress

      switch (event.key) {
        case "ArrowUp":
          if (direction !== "DOWN") setDirection("UP");
          break;
        case "ArrowDown":
          if (direction !== "UP") setDirection("DOWN");
          break;
        case "ArrowLeft":
          if (direction !== "RIGHT") setDirection("LEFT");
          break;
        case "ArrowRight":
          if (direction !== "LEFT") setDirection("RIGHT");
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [direction, isGameStarted]);

  useEffect(() => {
    if (gameOver || !isGameStarted) return; // Stop moving if the game is over or hasn't started

    const interval = setInterval(() => {
      moveSnake();
    }, 200);

    return () => clearInterval(interval);
  }, [snake, direction, gameOver, isGameStarted]);

  const moveSnake = () => {
    if (!direction) return; // Don't move if no direction is set

    const newSnake = [...snake];
    const head = newSnake[newSnake.length - 1];

    let newHead;
    switch (direction) {
      case "UP":
        newHead = [head[0] - 1, head[1]];
        break;
      case "DOWN":
        newHead = [head[0] + 1, head[1]];
        break;
      case "LEFT":
        newHead = [head[0], head[1] - 1];
        break;
      case "RIGHT":
        newHead = [head[0], head[1] + 1];
        break;
      default:
        return;
    }

    newSnake.push(newHead);
    if (!hasEatenFood(newHead)) {
      newSnake.shift();
    } else {
      setScore(score + 1); // Increment score
      generateNewFood();
    }

    if (isCollision(newHead)) {
      setGameOver(true);
    } else {
      setSnake(newSnake);
    }
  };

  const hasEatenFood = (head) => {
    return head[0] === food[0] && head[1] === food[1];
  };

  const generateNewFood = () => {
    const x = Math.floor(Math.random() * gridSize);
    const y = Math.floor(Math.random() * gridSize);
    setFood([x, y]);
  };

  const isCollision = (head) => {
    // Check wall collision
    if (
      head[0] < 0 ||
      head[1] < 0 ||
      head[0] >= gridSize ||
      head[1] >= gridSize
    ) {
      return true;
    }

    // Check self-collision
    for (let segment of snake) {
      if (segment[0] === head[0] && segment[1] === head[1]) {
        return true;
      }
    }

    return false;
  };

  const restartGame = () => {
    setSnake([[5, 5]]);
    setFood([10, 10]);
    setDirection(null); // Reset direction
    setIsGameStarted(false); // Reset game start state
    setGameOver(false);
    setScore(0); // Reset score
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <h1 className="text-5xl font-bold text-black mb-4">Snake Game</h1>
      <h2 className="text-2xl text-gray-700 mb-4">Score: {score}</h2>
      <div
        className="relative grid"
        style={{
          gridTemplateRows: `repeat(${gridSize}, 20px)`,
          gridTemplateColumns: `repeat(${gridSize}, 20px)`,
          border: "2px solid black",
        }}
      >
        {/* Render Game Grid */}
        {Array.from({ length: gridSize }).map((_, row) =>
          Array.from({ length: gridSize }).map((_, col) => (
            <div
              key={`${row}-${col}`}
              className="w-5 h-5 flex items-center justify-center"
            >
              {isSnakeSegment(row, col) && <FaGithub   className="text-2xl text-black" />}
              {isFood(row, col) && <BiSolidCheese className="text-2xl  text-yellow-500" />}
            </div>
          ))
        )}

        {/* Show Start Message */}
        {!isGameStarted && !gameOver && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
            <p className="text-gray-500 text-lg font-bold">
              Press an arrow key to start the game
            </p>
          </div>
        )}

        {/* Game Over Overlay */}
        {gameOver && (
          <div className="absolute inset-0 bg-white bg-opacity-75 flex flex-col items-center justify-center">
            <h2 className="text-3xl text-black font-bold mb-4">Game Over!</h2>
            <button
              onClick={restartGame}
              className="text-gray-800 hover:text-gray-600"
            >
              <FiRefreshCw size={40} stroke="black" strokeWidth={3} />
            </button>
          </div>
        )}
      </div>
    </div>
  );

  function isSnakeSegment(row, col) {
    return snake.some((segment) => segment[0] === row && segment[1] === col);
  }

  function isFood(row, col) {
    return food[0] === row && food[1] === col;
  }
};

export default SnakeGame;

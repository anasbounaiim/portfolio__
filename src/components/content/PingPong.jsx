import React, { useState, useEffect } from "react";
import { FiRefreshCw } from "react-icons/fi";

const PongGame = () => {
  const boardWidth = 600;
  const boardHeight = 360;
  const paddleWidth = 15;
  const paddleHeight = 90;
  const ballSize = 15;

  const initialBallSpeed = 4;
  const paddleSpeed = 7;

  // State for ball, paddles, and scores
  const [ball, setBall] = useState({ x: boardWidth / 2, y: boardHeight / 2, dx: initialBallSpeed, dy: initialBallSpeed });
  const [playerPaddleY, setPlayerPaddleY] = useState((boardHeight - paddleHeight) / 2);
  const [computerPaddleY, setComputerPaddleY] = useState((boardHeight - paddleHeight) / 2);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  // Function to restart the game
  const restartGame = () => {
    setBall({ x: boardWidth / 2, y: boardHeight / 2, dx: initialBallSpeed, dy: initialBallSpeed });
    setPlayerPaddleY((boardHeight - paddleHeight) / 2);
    setComputerPaddleY((boardHeight - paddleHeight) / 2);
    setPlayerScore(0);
    setComputerScore(0);
    setGameStarted(false);
  };

  // Handle player paddle movement with keyboard events
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!gameStarted) setGameStarted(true);

      if (e.key === "ArrowUp") {
        setPlayerPaddleY((prev) => Math.max(prev - paddleSpeed * 5, 0));
      } else if (e.key === "ArrowDown") {
        setPlayerPaddleY((prev) => Math.min(prev + paddleSpeed * 5, boardHeight - paddleHeight));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameStarted]);

  // Main game loop
  useEffect(() => {
    if (!gameStarted) return;

    const interval = setInterval(() => {
      setBall((prev) => {
        let newX = prev.x + prev.dx;
        let newY = prev.y + prev.dy;

        // Handle ball collision with top and bottom walls
        if (newY <= 0 || newY + ballSize >= boardHeight) {
          prev.dy *= -1;
        }

        // Handle ball collision with player paddle
        if (
          newX <= paddleWidth &&
          newY + ballSize >= playerPaddleY &&
          newY <= playerPaddleY + paddleHeight
        ) {
          prev.dx *= -1;
          newX = paddleWidth;
        }

        // Handle ball collision with computer paddle
        if (
          newX + ballSize >= boardWidth - paddleWidth &&
          newY + ballSize >= computerPaddleY &&
          newY <= computerPaddleY + paddleHeight
        ) {
          prev.dx *= -1;
          newX = boardWidth - paddleWidth - ballSize;
        }

        // Ball out of bounds (player misses)
        if (newX <= 0) {
          setComputerScore((score) => score + 1);
          return { x: boardWidth / 2, y: boardHeight / 2, dx: initialBallSpeed, dy: initialBallSpeed };
        }

        // Ball out of bounds (computer misses)
        if (newX + ballSize >= boardWidth) {
          setPlayerScore((score) => score + 1);
          return { x: boardWidth / 2, y: boardHeight / 2, dx: -initialBallSpeed, dy: -initialBallSpeed };
        }

        return { ...prev, x: newX, y: newY };
      });

      // Move computer paddle smoothly
      setComputerPaddleY((prev) => {
        const ballY = ball.y;
        const paddleCenterY = prev + paddleHeight / 2;

        // Add lag for imperfect AI movement
        const reactionSpeed = ball.x > boardWidth * 0.7 ? paddleSpeed / 2 : paddleSpeed / 3;

        if (paddleCenterY < ballY) {
          return Math.min(prev + reactionSpeed, boardHeight - paddleHeight);
        } else if (paddleCenterY > ballY) {
          return Math.max(prev - reactionSpeed, 0);
        }
        return prev;
      });
    }, 16);

    return () => clearInterval(interval);
  }, [ball, gameStarted, playerPaddleY, computerPaddleY]);

  // Render game objects
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Ping Pong Game</h1>
      <div
        className="relative bg-black rounded-lg shadow-lg"
        style={{ width: boardWidth, height: boardHeight }}
      >
        {/* Center line */}
        <div className="absolute w-0.5 h-full bg-gray-500 left-1/2 transform -translate-x-1/2"></div>

        {/* Ball */}
        <div
          className="absolute bg-white rounded-full"
          style={{
            width: ballSize,
            height: ballSize,
            top: ball.y,
            left: ball.x,
          }}
        ></div>

        {/* Player Paddle */}
        <div
          className="absolute bg-red-500"
          style={{
            width: paddleWidth,
            height: paddleHeight,
            top: playerPaddleY,
            left: 0,
          }}
        ></div>

        {/* Computer Paddle */}
        <div
          className="absolute bg-green-500"
          style={{
            width: paddleWidth,
            height: paddleHeight,
            top: computerPaddleY,
            right: 0,
          }}
        ></div>

        {/* Show "Press a key to start" message if the game hasn't started */}
        {!gameStarted && (
          <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
            <div className="text-white text-2xl font-thin">
              Press an arrow key to start the game
            </div>
          </div>
        )}
      </div>

      {/* Scores */}
      <div className="flex justify-between w-full max-w-md mt-4 text-xl text-black">
        <div className="bg-red-500 text-white px-4 py-2 text-lg rounded-md">
          <strong>You :</strong> {playerScore}
        </div>
         {/* Restart Button */}
      <button
        onClick={restartGame}
        className="  text-gray-800 hover:text-gray-600">
        <FiRefreshCw size={35} stroke="black" strokeWidth={3}/>
      </button>
        <div className="bg-green-500 text-white px-4 py-2 text-lg rounded-md">
          <strong>CPU :</strong> {computerScore}
        </div>
      </div>

     
    </div>
  );
};

export default PongGame;

import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

import Home from "./content/Home";
import About from "./content/About";
import Porfolio from "./content/Portfolio";
import Contact from "./content/Contact";

import "animate.css";

const Onglet = ({
  title,
  size,
  handleClick,
  content,
  initialX,
  initialY,
  id,
  styles,
}) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [position, setPosition] = useState({ left: initialX, top: initialY });

  const handleMouseDown = (event) => {
    setIsMouseDown(true);
    const rect = event.target.getBoundingClientRect();
    setOffsetX(event.clientX - rect.left);
    setOffsetY(event.clientY - rect.top);
  };

  const handleMouseMove = (event) => {
    if (isMouseDown) {
      const newX = event.clientX - offsetX;
      const newY = event.clientY - offsetY;
      setPosition({ left: newX, top: newY });
    }
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  

  return (
    <>
      <div
        className={`absolute z-[${styles}] ${size} bg-gray-100 h-10  rounded-lg overflow-hidden drop-shadow-md animate__animated animate__fadeInUp animate__faster`}
        style={{ left: position.left + "px", top: position.top + "px" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div className="w-full  bg-blue-600 select-none cursor-move py-1 flex justify-between items-center text-white text-xl font-medium">
          <span className="ml-4">{title}</span>
          <span
            className="mr-4 cursor-pointer rounded-md py-1 px-1 bg-red-500 hover:bg-red-600"
            onClick={handleClick}
          >
            <MdOutlineClose className="font-bold" />
          </span>
        </div>
        <div className="h-12 w-full fixed top-[2.5rem] bg-gray-300 flex justify-around items-center z-50">
          <p className="text-base  ml-2 font-semibold"> Address :</p>
          <p className="bg-gray-200 w-[80%] h-10 px-5 text-lg mr-7 font-semibold rounded-full text-gray-700 flex items-center">www.anasbounaim.com<span className="text-gray-500">/{content}</span></p>
          
        </div>
       
        <div className="w-full h-full overflow-scroll scroll-smooth ">
        
          {/* Home content */}
          {content === "home" ? (
            <div className="my-7">
              <Home />
            </div>
          ) : null}
          {/* about content */}
          {content === "about" ? (
            <div className="my-11" >
              <About />
            </div>
          ) : null}
          {/* portfolio content */}
          {content === "portfolio" ? (
            <div className="my-11">
              <Porfolio />
            </div>
          ) : null}
          {/* conatct content */}
          {content === "contact" ? (
            <div className="my-11">
              <Contact />
            </div>
          ) : null}
          {content === "bin" ? (
            <div className="flex justify-center items-center h-full">
              
              <span className="mb-9 text-lg font-medium text-zinc-500">your mind should be clean like this recycle bin</span>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Onglet;

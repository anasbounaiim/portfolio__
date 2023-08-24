import React, { useState, useEffect } from "react";
import "animate.css";
import { MdOutlineClose } from "react-icons/md";
import info_icon from '../assets/info-icon.png'

const InfoAlert = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 119000); // Hide the alert after 10 seconds

    return () => {
      clearTimeout(timer); // Clean up the timer when the component unmounts
    };
  }, []);

  const handleAlertClick = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className=" flex justify-center items-center w-screen h-screen text-white p-4 absolute z-[999999999] animate__animated animate__fadeIn">
        <div className="bg-red-500 relative bottom-9 h-40 w-96 overflow-hidden rounded-md">
          <div className='className="w-full p-4 h-8 bg-blue-600 select-none cursor-move flex justify-between items-center text-white text-xl font-medium"'>
            <div className="flex justify-center items-center flex-row relative right-2">
                <img src={info_icon} className="w-5 h-5" alt="" />
                <span className="text-base ml-1">info</span>
                 </div>
            <div onClick={handleAlertClick} className="cursor-pointer rounded-md py-[.12rem] relative left-2  px-[.12rem] bg-red-500 hover:bg-red-600">  <MdOutlineClose className="font-bold" /></div>
          </div>
          <div className=" bg-gray-100 h-full flex flex-col items-center justify-center ">
            <p className="relative bottom-5 text-gray-600">
              Click on <strong className="font-semibold"> F11 </strong> for a
              better experience
            </p>
            <button onClick={handleAlertClick} className="bg-gray-200 font-normal w-28 p-1 rounded-md border-gray-300 text-gray-500 hover:bg-gray-300 border-solid border-[1px]">
              ok
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default InfoAlert;

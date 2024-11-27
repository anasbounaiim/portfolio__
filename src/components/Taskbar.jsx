import React, { useState, useEffect } from "react";
import 'animate.css';
import icon from "../assets/icon_buu.png"
import icon_home from "../assets/home-icon.png"
import icon_about from "../assets/about-icon.png"
import icon_portfolio from "../assets/portfolio-icon.png"
import icon_contact from "../assets/contact-icon.png"
import icon_bin from "../assets/bin.png"
import icon_games from "../assets/icon_games.png"



const Taskbar = ({handleClickHome ,handleClickAbout,handleClickPortfolio,handleClickContact ,handleClickGames, gamesIcon, homeIcon , aboutIcon , portfolioIcon , contactIcon,binIcon}) => {
  const [currentHour, setCurrentHour] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  const [showSecondDiv, setShowSecondDiv] = useState(false);

  // Function to get the formatted time (HH:mm)
  function getFormattedTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    return `${hours}:${minutes}`;
  }

  // Function to get the formatted date (dd/MM/yy)
  function getFormattedDate() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = String(now.getFullYear()).slice(-2);

    return `${day}/${month}/${year}`;
  }

  // Update the time and date every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHour(getFormattedTime());
      setCurrentDate(getFormattedDate());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

// start bare div
const handleDivClick = () => {
  setShowSecondDiv(!showSecondDiv);
};

  return (
    <>
    <div className="z-[100] flex justify-between fixed bottom-0 left-0 w-full h-9 bg-blue-700 animate__animated animate__fadeInUp animate__faster">
      
<div className="flex">
   {/* start bare */}
      <div className="relative flex justify-center items-center float-left rounded-r-md w-40 h-9 bg-green-500 cursor-pointer" onClick={handleDivClick}>
        <span className="text-white text-xl font-bold bg-green-500 select-none	flex justify-center items-center"><img src={icon} className="w-7 h-7 mr-2" alt="" /> Start</span>
      </div>

       {/* taskbar icons */
       
       console.log("gameIcon in Taskbar:", gamesIcon)
}

       <div className="w-[1000px] cursor-pointer  ml-5">

      <ul className="flex h-9  text-white text-base font-medium">
      {homeIcon && <li className=" flex items-center justify-center shadow-inner bg-blue-600 w-[200px] rounded mr-1 hover:bg-blue-500 animate__animated animate__fadeIn" ><img src={icon_home} className="w-5 h-5 mr-2" alt="" /> <span> Home</span></li>  }  
       {aboutIcon && <li className=" flex items-center justify-center shadow-inner bg-blue-600 w-[200px] rounded mr-1 hover:bg-blue-500 animate__animated animate__fadeIn"><img src={icon_about} className="w-5 h-5 mr-2" alt="" />  About</li>}
       {portfolioIcon && <li className=" flex items-center justify-center shadow-inner bg-blue-600 w-[200px] rounded mr-1 hover:bg-blue-500 animate__animated animate__fadeIn"><img src={icon_portfolio} className="w-5 h-5 mr-2" alt="" />  Portfolio</li>}
        {contactIcon && <li className=" flex items-center justify-center shadow-inner bg-blue-600 w-[200px] rounded mr-1 hover:bg-blue-500 animate__animated animate__fadeIn"><img src={icon_contact} className="w-5 h-5 mr-2" alt="" />  Contact me</li>}
        {gamesIcon && <li className=" flex items-center justify-center shadow-inner bg-blue-600 w-[200px] rounded mr-1 hover:bg-blue-500 animate__animated animate__fadeIn"><img src={icon_games} className="w-5 h-5 mr-2" alt="" />  Games</li>}
        {binIcon && <li className=" flex items-center justify-center shadow-inner bg-blue-600 w-[200px] rounded mr-1 hover:bg-blue-500 animate__animated animate__fadeIn"><img src={icon_bin} className="w-5 h-5 mr-2" alt="" />  Recycle  bin </li>}
         </ul>
    </div>
</div>
    
      {/* //timezone */}
      <div className="float-right w-36 h-9 rounded-l-md bg-blue-500 text-white text-sm flex justify-center items-center">
        <p className="block text-center leading-none select-none 	bg-blue-500	">
          {currentHour} <br />
          {currentDate}
        </p>
      </div>

     
    </div>
      {/* //show div */}
      {showSecondDiv && (
        <div  className="z-[2] drop-shadow-md rounded-tr-lg absolute bottom-[2.2rem] w-[25rem] h-[26rem] bg-gray-100 text-gray-500 animate__animated animate__fadeInUp animate__faster">
          <p className="bg-blue-600	rounded-tr-lg flex justify-start items-center p-2 text-white">
            <img src="https://ui-avatars.com/api/?name=Anas+Bounaim&rounded=true&size=40&color=880808&background=FAA0A0" className="mr-2" alt="" />
            <span className="text-lg font-bold">Anas Bounaim</span>
          </p>
          <ul>
            <li className="text-lg p-4 font-medium border-b-2 border-gray-200" onClick={handleClickHome}><a href="#test"> <span className="flex"><img src={icon_home} className="w-7 h-7 mr-4" alt="" />  Home</span></a> </li>
            <li className="text-lg p-4 font-medium border-b-2 border-gray-200" onClick={handleClickAbout}><a href="#test"><span className="flex"><img src={icon_about} className="w-7 h-7 mr-4" alt="" />  About</span></a></li>
            <li className="text-lg p-4 font-medium border-b-2 border-gray-200" onClick={handleClickPortfolio}><a href="#test"><span className="flex"><img src={icon_portfolio} className="w-7 h-7 mr-4" alt="" />  Portfolio</span></a></li>
            <li className="text-lg p-4 font-medium border-b-2 border-gray-200" onClick={handleClickContact}><a href="#test"><span className="flex"><img src={icon_contact} className="w-7 h-7 mr-4" alt="" />  Contact me</span></a></li>
            <li className="text-lg p-4 font-medium border-b-2 border-gray-200" onClick={handleClickGames}><a href="#test"><span className="flex"><img src={icon_games} className="w-7 h-7 mr-4" alt="" />  Games</span></a></li>
          </ul>
        </div>
      )}


    </>
  );
};

export default Taskbar;

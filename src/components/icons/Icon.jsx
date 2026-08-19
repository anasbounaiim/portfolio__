import 'animate.css';

import icon_home from "../../assets/home-icon.png";
import icon_about from "../../assets/about-icon.png";
import icon_portfolio from "../../assets/portfolio-icon.png";
import icon_contact from "../../assets/contact-icon.png";
import icon_games from "../../assets/icon_games.png";
import icon_bin from "../../assets/bin.png";
import icon_videos from "../../assets/video-icon.svg";


const Icon = ({ bgColor, text, handleClick }) => {
  return (
    <>
      <div
        className={`m-3 flex flex-col items-center justify-center w-[100px] group
          ${text === "Recycle bin" ? "absolute right-0 w-24 bottom-14 z-0" : "z-0"} 
          animate__animated animate__fadeIn animate__faster cursor-pointer px-4 py-1 
          hover:bg-white/10 hover:backdrop-blur-sm hover:rounded-xl transition-all duration-300`}
        onClick={handleClick}
      >
        <div
          className={`w-[50px] h-[50px] ${bgColor} text-white text-xl rounded-md flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}
        >
          {/* Restoring original Icons */}
          {text === "Home" && <img src={icon_home} className="w-18 h-18" alt="" />}
          {text === "About" && <img src={icon_about} className="w-18 h-18" alt="" />}
          {text === "Portfolio" && (
            <img src={icon_portfolio} className="w-18 h-18" alt="" />
          )}
          {text === "Say hi !" && (
            <img src={icon_contact} className="w-18 h-18" alt="" />
          )}
          {text === "Games" && (
            <img src={icon_games} className="w-18 h-18" alt="" />
          )}
          {text === "My Videos" && (
            <img src={icon_videos} className="w-18 h-18" alt="" />
          )}
          {text === "Recycle bin" && (
            <img src={icon_bin} className="w-18 h-18" alt="" />
          )}
        </div>
        <span
          className={`${text === "Recycle bin" ? "text-sm text-center" : "text-sm"
            } text-center text-white font-medium`}
        >
          {text}
        </span>
      </div>


    </>
  );
}

export default Icon;

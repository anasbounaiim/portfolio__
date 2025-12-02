import React, { useState, useEffect } from "react";
import "../index.css";

// UI components (same folder level, inside /components/ui)
import Taskbar from "./ui/Taskbar";
import LoadingPage from "./ui/LoadingPage";
import Onglet from "./ui/Onglet";
import Icon from "./ui/Icon";
import AudioPlayer from "./ui/AudioPlayer";
import Weather from "./ui/Weather";
import RightClickMessage from "./ui/RightClickMessage";
import CirclesAnimation from "./ui/CirclesAnimation";
import InfoAlert from "./ui/InfoAlert";

// Device detection
import { isMobile, isTablet, isDesktop } from "react-device-detect";

// ASSETS – Myapp.jsx is in /components → go UP once → /assets
import mobile_page from "../assets/mobile_page.jpg";

import icon_home from "../assets/home-icon.png";
import icon_about from "../assets/about-icon.png";
import icon_portfolio from "../assets/portfolio-icon.png";
import icon_contact from "../assets/contact-icon.png";
import icon_games from "../assets/icon_games.png";
import icon_bin from "../assets/bin.png";


function Myapp() {
  const [isLoading, setIsLoading] = useState(true);

  const [showOngletHome, setShowOngletHome] = useState(false);
  const [showOngletAbout, setShowOngletAbout] = useState(false);
  const [showOngletPortfolio, setShowOngletPortfolio] = useState(false);
  const [showOngletContact, setShowOngletContact] = useState(false);
  const [showOngletGames, setShowOngletGames] = useState(false);
  const [showOngletBin, setShowOngletBin] = useState(false);

  // One config array for window positions
  const windows = [
    { key: "home", x: 250, y: 100 },
    { key: "about", x: 200, y: 200 },
    { key: "portfolio", x: 300, y: 150 },
    { key: "contact", x: 320, y: 110 },
    { key: "games", x: 350, y: 130 },
    { key: "bin", x: 600, y: 100 },
  ];

  // Z-index state for each window (home, about, portfolio, contact, games, bin)
  const [zIndices, setZIndices] = useState(
    windows.map((_, index) => index + 1)
  );

  const handleDivClick = (index) => {
    setZIndices((prev) => {
      const maxZIndex = Math.max(...prev);
      return prev.map((z, i) => (i === index ? maxZIndex + 1 : z));
    });
  };

  // Titles with icons
  const HomeTitle = (
    <span className="flex items-center">
      <img src={icon_home} className="w-8 h-8 mr-3" alt="" /> Home
    </span>
  );
  const AboutTitle = (
    <span className="flex items-center">
      <img src={icon_about} className="w-8 h-8 mr-3" alt="" /> About
    </span>
  );
  const PortfolioTitle = (
    <span className="flex items-center">
      <img src={icon_portfolio} className="w-8 h-8 mr-3" alt="" /> Portfolio
    </span>
  );
  const ContactTitle = (
    <span className="flex items-center">
      <img src={icon_contact} className="w-8 h-8 mr-3" alt="" /> Contact
    </span>
  );
  const GamesTitle = (
    <span className="flex items-center">
      <img src={icon_games} className="w-8 h-8 mr-3" alt="" /> Games
    </span>
  );
  const BinTitle = (
    <span className="flex items-center">
      <img src={icon_bin} className="w-8 h-8 mr-3" alt="" /> Bin
    </span>
  );

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  const handleClickHome = () => setShowOngletHome((v) => !v);
  const handleClickAbout = () => setShowOngletAbout((v) => !v);
  const handleClickPortfolio = () => setShowOngletPortfolio((v) => !v);
  const handleClickContact = () => setShowOngletContact((v) => !v);
  const handleClickGames = () => setShowOngletGames((v) => !v);
  const handleClickBin = () => setShowOngletBin((v) => !v);

  return (
    <div>
      {isDesktop ? (
        <div>
          {isLoading ? (
            <LoadingPage />
          ) : (
            <>
              <InfoAlert />
              <AudioPlayer />
              <Weather />
              <RightClickMessage />
              <CirclesAnimation />

              {/* Desktop icons */}
              <Icon
                bgColor=""
                text="Home"
                handleClick={handleClickHome}
                showOnglet={showOngletHome}
              />
              <Icon
                bgColor=""
                text="About"
                handleClick={handleClickAbout}
                showOnglet={showOngletAbout}
              />
              <Icon
                bgColor=""
                text="Portfolio"
                handleClick={handleClickPortfolio}
                showOnglet={showOngletPortfolio}
              />
              <Icon
                bgColor=""
                text="Say hi !"
                handleClick={handleClickContact}
                showOnglet={showOngletContact}
              />
              <Icon
                bgColor=""
                text="Games"
                handleClick={handleClickGames}
                showOnglet={showOngletGames}
              />
              <Icon
                bgColor=""
                text="Recycle bin"
                handleClick={handleClickBin}
                showOnglet={showOngletBin}
              />

              {/* Home window (index 0) */}
              {showOngletHome && (
                <Onglet
                  title={HomeTitle}
                  content="home"
                  handleClick={handleClickHome}
                  size="w-[680px] h-[530px]"
                  id={0}
                  initialX={windows[0].x}
                  initialY={windows[0].y}
                  styles={zIndices[0]}
                  onClick={() => handleDivClick(0)}
                />
              )}

              {/* About window (index 1) */}
              {showOngletAbout && (
                <Onglet
                  title={AboutTitle}
                  content="about"
                  handleClick={handleClickAbout}
                  size="w-[660px] h-[580px]"
                  id={1}
                  initialX={windows[1].x}
                  initialY={windows[1].y}
                  styles={zIndices[1]}
                  onClick={() => handleDivClick(1)}
                />
              )}

              {/* Portfolio window (index 2) */}
              {showOngletPortfolio && (
                <Onglet
                  title={PortfolioTitle}
                  content="portfolio"
                  handleClick={handleClickPortfolio}
                  size="w-[700px] h-[590px]"
                  id={2}
                  initialX={windows[2].x}
                  initialY={windows[2].y}
                  styles={zIndices[2]}
                  onClick={() => handleDivClick(2)}
                />
              )}

              {/* Contact window (index 3) */}
              {showOngletContact && (
                <Onglet
                  title={ContactTitle}
                  content="contact"
                  handleClick={handleClickContact}
                  size="w-[600px] h-[570px]"
                  id={3}
                  initialX={windows[3].x}
                  initialY={windows[3].y}
                  styles={zIndices[3]}
                  onClick={() => handleDivClick(3)}
                />
              )}

              {/* Games window (index 4) */}
              {showOngletGames && (
                <Onglet
                  title={GamesTitle}
                  content="games"
                  handleClick={handleClickGames}
                  size="w-[700px] h-[640px]"
                  id={4}
                  initialX={windows[4].x}
                  initialY={windows[4].y}
                  styles={zIndices[4]}
                  onClick={() => handleDivClick(4)}
                />
              )}

              {/* Bin window (index 5) */}
              {showOngletBin && (
                <Onglet
                  title={BinTitle}
                  content="bin"
                  handleClick={handleClickBin}
                  size="w-[600px] h-[510px]"
                  id={5}
                  initialX={windows[5].x}
                  initialY={windows[5].y}
                  styles={zIndices[5]}
                  onClick={() => handleDivClick(5)}
                />
              )}

              <Taskbar
                handleClickHome={handleClickHome}
                handleClickPortfolio={handleClickPortfolio}
                handleClickAbout={handleClickAbout}
                handleClickContact={handleClickContact}
                handleClickGames={handleClickGames}
                homeIcon={showOngletHome}
                aboutIcon={showOngletAbout}
                portfolioIcon={showOngletPortfolio}
                contactIcon={showOngletContact}
                gamesIcon={showOngletGames}
                binIcon={showOngletBin}
              />
            </>
          )}
        </div>
      ) : (
        <div className="w-full bg-blue-600">
          <img src={mobile_page} alt="" />
        </div>
      )}
    </div>
  );
}

export default Myapp;

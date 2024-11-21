import React, { useState, useEffect } from "react";
import "./index.css";
import Taskbar from "./components/Taskbar.jsx";
import LoadingPage from "./components/LoadingPage.jsx";
import Onglet from "./components/Onglet";
import Icon from "./components/Icon";
import AudioPlayer from "./components/AudioPlayer";
import Whether from "./components/Weather";
import RightClickMessage from "./components/RightClickMessage";
import CirclesAnimation from './components/CirclesAnimation';
import InfoAlert from './components/InfoAlert';



import { isMobile, isTablet, isDesktop } from "react-device-detect";
import mobile_page from "./assets/mobile_page.jpg";

import icon_home from "./assets/home-icon.png";
import icon_about from "./assets/about-icon.png";
import icon_portfolio from "./assets/portfolio-icon.png";
import icon_contact from "./assets/contact-icon.png";
import icon_xogame from "./assets/icon_xogame.png";
import icon_bin from "./assets/bin.png";

function Myapp() {
  const [isLoading, setIsLoading] = useState(true);
  const [showOngletHome, setShowOngletHome] = useState(false);
  const [showOngletAbout, setShowOngletAbout] = useState(false);
  const [showOngletPortfolio, setShowOngletPortfolio] = useState(false);
  const [showOngletContact, setShowOngletContact] = useState(false);
  const [showOngletXOgame, setShowOngletXOgame] = useState(false);
  const [showOngletBin, setShowOngletBin] = useState(false);

  const [divs, setDivs] = useState([
    { id: 1, x: 250, y: 100, zIndex: 1 },
    { id: 2, x: 200, y: 200, zIndex: 2 },
    { id: 3, x: 300, y: 150, zIndex: 3 },
    { id: 4, x: 320, y: 110, zIndex: 4 },
  ]);


const [zIndices, setZIndices] = useState([1, 2, 3, 4]);

const handleDivClick = (index) => {
  const newZIndices = [...zIndices];
  const maxZIndex = Math.max(...newZIndices);
  newZIndices[index] = maxZIndex + 1;
  setZIndices(newZIndices);
};

  //

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
  const XOgameTitle = (
    <span className="flex items-center">
      <img src={icon_xogame} className="w-8 h-8 mr-3" alt="" /> XOgame
    </span>
  );
  const BinTitle = (
    <span className="flex items-center">
      <img src={icon_bin} className="w-8 h-8 mr-3" alt="" /> Bin
    </span>
  );

  useEffect(() => {
    // Simulate loading by setting isLoading to false after a delay (e.g., 2 seconds)
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(loadingTimeout); // Clean up the timeout if the component unmounts before loading completes
  }, []);

  const handleClickHome = () => {
    setShowOngletHome(!showOngletHome);
  };

  const handleClickAbout = () => {
    setShowOngletAbout(!showOngletAbout);
  };

  const handleClickPortfolio = () => {
    setShowOngletPortfolio(!showOngletPortfolio);
  };

  const handleClickContact = () => {
    setShowOngletContact(!showOngletContact);
  };
  const handleClickXOgame = () => {
    setShowOngletXOgame(!showOngletXOgame);
  };
  const handleClickBin = () => {
    setShowOngletBin(!showOngletBin);
  };

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
              <Whether />
              <RightClickMessage></RightClickMessage>

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
                text="XOgame"
                handleClick={handleClickXOgame}
                showOnglet={showOngletXOgame}
              />
              <Icon
                bgColor=""
                text="Recycle bin"
                handleClick={handleClickBin}
                showOnglet={showOngletBin}
              />
              

              {showOngletHome && (
                <Onglet
                  title={HomeTitle}
                  content="home"
                  handleClick={handleClickHome}
                  size="w-[680px] h-[530px]"
                  id={divs[0].id}
                  initialX={divs[0].x}
                  initialY={divs[0].y}
                  styles={zIndices[0]}
                  onClick={() => handleDivClick(0)}
                />
              )}

              {showOngletAbout && (
                <Onglet
                  title={AboutTitle}
                  content="about"
                  handleClick={handleClickAbout}
                  size="w-[660px] h-[520px]"
                  id={divs[1].id}
                  initialX={divs[1].x}
                  initialY={divs[1].y}
                  styles={zIndices[1]}
                  onClick={() => handleDivClick(1)}
                />
              )}

              {showOngletPortfolio && (
                <Onglet
                  title={PortfolioTitle}
                  content="portfolio"
                  handleClick={handleClickPortfolio}
                  size="w-[700px] h-[590px]"
                  id={divs[2].id}
                  initialX={divs[2].x}
                  initialY={divs[2].y}
                  styles={zIndices[2]}
                  onClick={() => handleDivClick(2)}
                />
              )}

              {showOngletContact && (
                <Onglet
                  title={ContactTitle}
                  content="contact"
                  handleClick={handleClickContact}
                  size="w-[600px] h-[570px]"
                  id={divs[3].id}
                  initialX={divs[3].x}
                  initialY={divs[3].y}
                  styles={zIndices[3]}
                  onClick={() => handleDivClick(3)}
                />
              )}
                 {showOngletXOgame && (
                <Onglet
                  title={XOgameTitle}
                  content="xogame"
                  handleClick={handleClickXOgame}
                  size="w-[680px] h-[600px]"
                  id={divs[0].id}
                  initialX={divs[0].x}
                  initialY={divs[0].y}
                  styles={zIndices[0]}
                  onClick={() => handleDivClick(4)}
                />
              )}
              {showOngletBin && (
                <Onglet
                  title={BinTitle}
                  content="bin"
                  handleClick={handleClickBin}
                  size="w-[600px] h-[510px]"
                  initialX={600}
                  initialY={100}
                />
              )}
    

              <Taskbar
                handleClickHome={handleClickHome}
                handleClickPortfolio={handleClickPortfolio}
                handleClickAbout={handleClickAbout}
                handleClickContact={handleClickContact}
                handleClickXOgame={handleClickXOgame}
                homeIcon={showOngletHome}
                aboutIcon={showOngletAbout}
                portfolioIcon={showOngletPortfolio}
                contactIcon={showOngletContact}
                XOgameIcon={showOngletXOgame}
                binIcon={showOngletBin}

              />
              <CirclesAnimation></CirclesAnimation>
            </>
          )}
        </div>
      ) : (
        <div className="w-full  bg-blue-600">
          <img src={mobile_page} alt="" />
        </div>
      )}
    </div>
  );
}

export default Myapp;

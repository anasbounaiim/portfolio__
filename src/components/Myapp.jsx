import React, { useState, useEffect } from "react";
import "../index.css";
import { useWindowContext } from "../context/WindowContext";
import { AnimatePresence, motion } from "framer-motion";

// UI components
import Taskbar from "./taskbar/Taskbar";
import LoadingPage from "./ui/LoadingPage";
import LoginPage from "./ui/LoginPage";
import Onglet from "./windows/Onglet";
import Icon from "./icons/Icon";
import AudioPlayer from "./ui/AudioPlayer";
import Weather from "./ui/Weather";
import RightClickMessage from "./ui/RightClickMessage";
import CirclesAnimation from "./ui/CirclesAnimation";
import InfoAlert from "./ui/InfoAlert";

// Device detection
import { isMobile, isTablet, isDesktop } from "react-device-detect";

// ASSETS
import mobile_page from "../assets/mobile_page.jpg";
import icon_home from "../assets/home-icon.png";
import icon_about from "../assets/about-icon.png";
import icon_portfolio from "../assets/portfolio-icon.png";
import icon_contact from "../assets/contact-icon.png";
import icon_games from "../assets/icon_games.png";
import icon_bin from "../assets/bin.png";
import bg_image from "../assets/logo_animated.gif";

function Myapp() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { windows, openWindow, closeWindow, focusWindow, minimizeWindow, toggleMaximizeWindow } = useWindowContext();

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    window.logOut = () => setIsLoggedIn(false);

    return () => clearTimeout(loadingTimeout);
  }, []);

  // Icon mapping
  const iconConfig = {
    home: { title: "Home", img: icon_home, size: "w-[680px] h-[530px]" },
    about: { title: "About", img: icon_about, size: "w-[660px] h-[580px]" },
    portfolio: { title: "Portfolio", img: icon_portfolio, size: "w-[700px] h-[590px]" },
    contact: { title: "Say hi !", img: icon_contact, size: "w-[600px] h-[570px]" },
    games: { title: "Games", img: icon_games, size: "w-[700px] h-[640px]" },
    bin: { title: "Recycle bin", img: icon_bin, size: "w-[600px] h-[510px]" }
  };

  const getTitleJSX = (id) => (
    <span className="flex items-center text-sm sm:text-base md:text-lg">
      <img src={iconConfig[id].img} className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mr-2 sm:mr-3" alt="" /> {windows[id].title}
    </span>
  );

  return (
    <div className="fixed inset-0 overflow-hidden bg-[#070707] selection:bg-blue-500/30">
      {/* Dimmed Background Logo Layer */}
      <div 
        className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none select-none z-0"
      >
        <img 
          src={bg_image} 
          alt="" 
          className="w-[450px] max-w-[80vw] h-auto object-contain"
        />
      </div>
      {isDesktop ? (
        <div className="w-full h-full relative selection:bg-blue-500/30">
          <AnimatePresence>
            {isLoading ? (
              <LoadingPage key="loading" />
            ) : !isLoggedIn ? (
              <LoginPage key="login" onLogin={() => setIsLoggedIn(true)} />
            ) : (
              <motion.div
                key="desktop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
              >
                <InfoAlert />
                <AudioPlayer />
                <Weather />
                <RightClickMessage />
                <CirclesAnimation />
                
                {/* Digital Screen Overlay */}
                <div className="digital-screen-overlay flicker" />
                <div className="digital-screen-glow" />

                {/* Desktop icons */}
                {Object.keys(windows).map(id => (
                  <Icon
                    key={`icon-${id}`}
                    bgColor=""
                    text={iconConfig[id].title}
                    handleClick={() => openWindow(id)}
                    showOnglet={windows[id].isOpen}
                  />
                ))}

                {/* Render Open Windows */}
                {Object.values(windows).map(win => {
                  if (!win.isOpen) return null;

                  const initialX = win.id === 'home' ? 250 : win.id === 'about' ? 200 : win.id === 'portfolio' ? 300 : win.id === 'contact' ? 320 : win.id === 'games' ? 350 : 600;
                  const initialY = win.id === 'home' ? 100 : win.id === 'about' ? 200 : win.id === 'portfolio' ? 150 : win.id === 'contact' ? 110 : win.id === 'games' ? 130 : 100;

                  return (
                    <Onglet
                      key={`win-${win.id}`}
                      title={getTitleJSX(win.id)}
                      content={win.id}
                      handleClose={() => closeWindow(win.id)}
                      handleMinimize={() => minimizeWindow(win.id)}
                      handleMaximize={() => toggleMaximizeWindow(win.id)}
                      size={iconConfig[win.id].size}
                      id={win.id}
                      initialX={initialX}
                      initialY={initialY}
                      styles={win.zIndex}
                      isMinimized={win.isMinimized}
                      isMaximized={win.isMaximized}
                      onFocus={() => focusWindow(win.id)}
                    />
                  )
                })}

                <Taskbar onLogout={() => setIsLoggedIn(false)} />
              </motion.div>
            )}
          </AnimatePresence>
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

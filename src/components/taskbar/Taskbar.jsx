import React, { useState, useEffect, useRef } from "react";
import 'animate.css';
import { useWindowContext } from "../../context/WindowContext";
import { FaArrowRight, FaPowerOff, FaWifi, FaBatteryThreeQuarters, FaRedo, FaSignOutAlt } from "react-icons/fa";

import icon from "../../assets/icon_buu.png"
import icon_home from "../../assets/home-icon.png"
import icon_about from "../../assets/about-icon.png"
import icon_portfolio from "../../assets/portfolio-icon.png"
import icon_contact from "../../assets/contact-icon.png"
import icon_bin from "../../assets/bin.png"
import icon_games from "../../assets/icon_games.png"

const TaskbarTab = ({ win, isActive, icon, onClick, updateTabPosition }) => {
  const tabRef = useRef(null);

  useEffect(() => {
    if (tabRef.current && updateTabPosition) {
      const rect = tabRef.current.getBoundingClientRect();
      updateTabPosition(win.id, {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      });
    }

    const handleResize = () => {
      if (tabRef.current && updateTabPosition) {
        const rect = tabRef.current.getBoundingClientRect();
        updateTabPosition(win.id, {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [win.isOpen, updateTabPosition, win.id]);

  return (
    <li
      ref={tabRef}
      onClick={onClick}
      className={`flex items-center justify-center px-4 min-w-[120px] max-w-[200px] rounded-sm mr-[2px] transition-all cursor-pointer animate__animated animate__fadeIn ${isActive
        ? 'bg-blue-800 shadow-[inset_0_2px_5px_rgba(0,0,0,0.4)] border-t-2 border-green-400'
        : 'bg-blue-600 hover:bg-blue-500 shadow-sm'
        }`}
    >
      <img src={icon} className="w-4 h-4 mr-2" alt="" />
      <span className="truncate">{win.title}</span>
    </li>
  );
};

const Taskbar = ({ onLogout }) => {
  const [currentHour, setCurrentHour] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [showSecondDiv, setShowSecondDiv] = useState(false);

  const { windows, toggleWindowFromTaskbar, openWindow, updateTabPosition } = useWindowContext();

  // Find the currently active window (highest z-index that is not minimized)
  const activeWindows = Object.values(windows).filter(w => w.isOpen && !w.isMinimized);
  const activeWindowId = activeWindows.length > 0
    ? activeWindows.reduce((prev, current) => (prev.zIndex > current.zIndex) ? prev : current).id
    : null;

  function getFormattedTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  function getFormattedDate() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = String(now.getFullYear()).slice(-2);
    return `${day}/${month}/${year}`;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHour(getFormattedTime());
      setCurrentDate(getFormattedDate());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDivClick = () => {
    setShowSecondDiv(!showSecondDiv);
  };

  const iconMap = {
    home: icon_home,
    about: icon_about,
    portfolio: icon_portfolio,
    contact: icon_contact,
    games: icon_games,
    bin: icon_bin
  };

  return (
    <>
      <div className="z-[100] flex justify-between fixed bottom-0 left-0 w-full h-9 bg-blue-700 animate__animated animate__fadeInUp animate__faster shadow-[0_-2px_10px_rgba(0,0,0,0.3)]">
        <div className="flex">
          <div
            className="relative flex justify-center items-center float-left rounded-r-md w-32 h-9 bg-green-600 hover:bg-green-500 transition-colors cursor-pointer"
            onClick={handleDivClick}
          >
            <span className="text-white text-lg font-bold select-none flex justify-center items-center">
              <img src={icon} className="w-6 h-6 mr-2" alt="Start" /> Start
            </span>
          </div>

          <div className="flex-1 overflow-x-auto no-scrollbar ml-2">
            <ul className="flex h-9 text-white text-sm font-medium">
              {Object.values(windows).map((win) => {
                if (!win.isOpen) return null;
                const isActive = activeWindowId === win.id;
                return (
                  <TaskbarTab
                    key={`task-${win.id}`}
                    win={win}
                    isActive={isActive}
                    icon={iconMap[win.id]}
                    onClick={() => toggleWindowFromTaskbar(win.id)}
                    updateTabPosition={updateTabPosition}
                  />
                );
              })}
            </ul>
          </div>
        </div>

        <div className="w-32 h-9 rounded-l-md bg-blue-500 text-white text-xs flex justify-center items-center px-2">
          <p className="text-center leading-tight select-none">
            {currentHour} <br />
            {currentDate}
          </p>
        </div>
      </div>

      {showSecondDiv && (
        <div
          className="z-[101] drop-shadow-2xl rounded-t-lg absolute bottom-[49.5px]  w-[26.5rem] bg-white overflow-hidden border-2 border-[#245edb] shadow-[0_0_20px_rgba(0,0,0,0.5)] flex flex-col font-sans"
        >
          {/* XP Header */}
          <div className="bg-gradient-to-b from-[#245edb] to-[#3f8cf3] p-2.5 flex items-center text-white border-b border-[#1c4ab0] shadow-[inset_0_1px_3px_rgba(255,255,255,0.4)]">
            <div className="w-11 h-11 bg-white p-[2px] rounded-sm shadow-sm mr-3">
              <img
                src="https://ui-avatars.com/api/?name=Anas+Bounaim&rounded=false&size=44&color=ffffff&background=245edb"
                className="w-full h-full rounded-sm"
                alt="User"
              />
            </div>
            <span className="text-lg font-bold shadow-sm">Anas Bounaim</span>
          </div>

          <div className="flex flex-row bg-white border-t border-[#f5b85a]">
            {/* Left Column - Programs */}
            <div className="w-[55%] py-1 flex flex-col border-r border-gray-100">
              <ul className="flex flex-col">
                <li
                  className="px-2 py-1.5 hover:bg-[#245edb] hover:text-white transition-colors cursor-pointer group flex items-center"
                  onClick={() => { openWindow('portfolio'); setShowSecondDiv(false); }}
                >
                  <img src={icon_portfolio} className="w-9 h-9 mr-2.5 group-hover:drop-shadow-md" alt="" />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold leading-tight">My Projects</span>
                    <span className="text-[11px] opacity-70 leading-tight">View my work</span>
                  </div>
                </li>
                <li
                  className="px-2 py-1.5 hover:bg-[#245edb] hover:text-white transition-colors cursor-pointer group flex items-center"
                  onClick={() => { openWindow('contact'); setShowSecondDiv(false); }}
                >
                  <img src={icon_contact} className="w-9 h-9 mr-2.5 group-hover:drop-shadow-md" alt="" />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold leading-tight">Contact Me</span>
                    <span className="text-[11px] opacity-70 leading-tight">Send me a message</span>
                  </div>
                </li>
                <div className="mx-2 my-1 border-t border-gray-200 opacity-50" />
                <li
                  className="px-2 py-1.5 hover:bg-[#245edb] hover:text-white transition-colors cursor-pointer group flex items-center"
                  onClick={() => { openWindow('about'); setShowSecondDiv(false); }}
                >
                  <img src={icon_about} className="w-8 h-8 mr-3 group-hover:drop-shadow-md ml-0.5" alt="" />
                  <span className="text-sm font-medium">About Me</span>
                </li>
                <li
                  className="px-2 py-1.5 hover:bg-[#245edb] hover:text-white transition-colors cursor-pointer group flex items-center"
                  onClick={() => { openWindow('games'); setShowSecondDiv(false); }}
                >
                  <img src={icon_games} className="w-8 h-8 mr-3 group-hover:drop-shadow-md ml-0.5" alt="" />
                  <span className="text-sm font-medium">Games Player</span>
                </li>
                <li
                  className="px-2 py-1.5 hover:bg-[#245edb] hover:text-white transition-colors cursor-pointer group flex items-center"
                  onClick={() => { openWindow('home'); setShowSecondDiv(false); }}
                >
                  <img src={icon_home} className="w-8 h-8 mr-3 group-hover:drop-shadow-md ml-0.5" alt="" />
                  <span className="text-sm font-medium">Media Center</span>
                </li>
                <li
                  className="px-2 py-1.5 hover:bg-[#245edb] hover:text-white transition-colors cursor-pointer group flex items-center"
                  onClick={() => { setShowSecondDiv(false); }}
                >
                  <img src={icon_bin} className="w-8 h-8 mr-3 group-hover:drop-shadow-md ml-0.5 opacity-60" alt="" />
                  <span className="text-sm font-medium opacity-60 italic">Recycle Bin</span>
                </li>
              </ul>
            </div>

            {/* Right Column - Social links */}
            <div className="w-[45%] bg-[#d3e5fa] border-l border-[#245edb]/30 py-1 flex flex-col">
              <ul className="flex flex-col text-[#002e82]">
                <li className="px-3 py-1.5 hover:bg-[#245edb] hover:text-white cursor-pointer flex items-center">
                  <span className="text-[12px] font-bold">Recent Documents</span>
                </li>
                <li className="px-3 py-1.5 hover:bg-[#245edb] hover:text-white cursor-pointer flex items-center" onClick={() => window.open('https://github.com/anasbounaiim', '_blank')}>
                  <div className="w-6 h-6 mr-3 flex items-center justify-center">
                    <img src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-github-1.png" className="w-5 h-5 invert group-hover:invert-0" alt="" />
                  </div>
                  <span className="text-[12px] font-medium">Github</span>
                </li>
                <li className="px-3 py-1.5 hover:bg-[#245edb] hover:text-white cursor-pointer flex items-center" onClick={() => window.open('https://www.linkedin.com/in/anas-bounaim-37450621a/', '_blank')}>
                  <div className="w-6 h-6 mr-3 flex items-center justify-center bg-blue-600 rounded-sm">
                    <span className="text-white font-bold text-[10px]">in</span>
                  </div>
                  <span className="text-[12px] font-medium">LinkedIn</span>
                </li>
                <li className="px-3 py-1.5 hover:bg-[#245edb] hover:text-white cursor-pointer flex items-center" onClick={() => window.open('https://www.instagram.com/anasbounaiim/', '_blank')}>
                  <div className="w-6 h-6 mr-3 flex items-center justify-center bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-[4px]">
                    <div className="w-3.5 h-3.5 border-[1.5px] border-white rounded-[3px] flex items-center justify-center">
                      <div className="w-1 h-1 bg-white rounded-full" />
                    </div>
                  </div>
                  <span className="text-[11px] font-medium">Instagram</span>
                </li>
              </ul>
            </div>
          </div>

          {/* XP Footer */}
          <div className="bg-[#1c55d5] p-2 flex justify-end gap-5 border-t border-[#1c4ab0] items-center relative z-50 px-6">
            <button
              type="button"
              className="flex items-center justify-center text-white/80 hover:text-white hover:scale-110 active:scale-95 transition-all z-[100] outline-none"
              title="Log Off"
              onClick={() => window.location.reload()}
            >
              <FaSignOutAlt size={22} className="drop-shadow-md" />
            </button>
            <button
              type="button"
              className="flex items-center justify-center text-white/80 hover:text-white hover:scale-110 active:scale-95 transition-all z-[100] outline-none"
              title="Shut Down"
              onClick={() => window.location.reload()}
            >
              <FaPowerOff size={22} className="drop-shadow-md" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Taskbar;

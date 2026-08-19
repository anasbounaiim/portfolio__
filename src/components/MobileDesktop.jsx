import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdArrowBack, MdClose, MdHome } from "react-icons/md";
import { FaBatteryThreeQuarters, FaGithub, FaInstagram, FaLinkedinIn, FaWifi } from "react-icons/fa";

import Home from "../features/Home";
import About from "../features/About";
import Portfolio from "../features/Portfolio";
import Contact from "../features/Contact";
import Games from "../features/Games";
import Videos from "../features/Videos";
import Weather from "./ui/Weather";

import iconHome from "../assets/home-icon.png";
import iconAbout from "../assets/about-icon.png";
import iconPortfolio from "../assets/portfolio-icon.png";
import iconContact from "../assets/contact-icon.png";
import iconGames from "../assets/icon_games.png";
import iconVideos from "../assets/video-icon.svg";
import iconBin from "../assets/bin.png";
import wallpaper from "../assets/logo_animated.gif";

const apps = [
  { id: "home", label: "Home", icon: iconHome },
  { id: "about", label: "About", icon: iconAbout },
  { id: "portfolio", label: "Portfolio", icon: iconPortfolio },
  { id: "contact", label: "Say hi!", icon: iconContact },
  { id: "games", label: "Games", icon: iconGames },
  { id: "videos", label: "Videos", icon: iconVideos },
  { id: "bin", label: "Recycle Bin", icon: iconBin },
];

const socialApps = [
  { id: "github", label: "GitHub", url: "https://github.com/anasbounaiim", icon: FaGithub, color: "bg-zinc-800" },
  { id: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/anas-bounaim-37450621a/", icon: FaLinkedinIn, color: "bg-[#0a66c2]" },
  { id: "instagram", label: "Instagram", url: "https://www.instagram.com/anasbounaiim/", icon: FaInstagram, color: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600" },
];

const content = {
  home: <Home />,
  about: <About />,
  portfolio: <Portfolio />,
  contact: <Contact />,
  games: <Games />,
  videos: <Videos />,
  bin: <div className="flex min-h-[65vh] items-center justify-center px-8 text-center text-zinc-400">Your mind should be clean like this recycle bin.</div>,
};

export default function MobileDesktop({ onLogout }) {
  const [activeApp, setActiveApp] = useState(null);
  const [now, setNow] = useState(new Date());
  const [powerExpanded, setPowerExpanded] = useState(false);
  const powerControlRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!powerExpanded) return undefined;
    const hidePowerButton = (event) => {
      if (!powerControlRef.current?.contains(event.target)) setPowerExpanded(false);
    };
    document.addEventListener("pointerdown", hidePowerButton);
    return () => document.removeEventListener("pointerdown", hidePowerButton);
  }, [powerExpanded]);

  const active = apps.find((app) => app.id === activeApp);

  return (
    <div className="mobile-os relative h-[100dvh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-black" />
      <img src={wallpaper} alt="" className="pointer-events-none absolute left-1/2 top-1/2 w-[78%] -translate-x-1/2 -translate-y-1/2 opacity-10 grayscale" />

      <div className="relative z-10 flex h-[calc(1.75rem+env(safe-area-inset-top))] items-end justify-between bg-black px-4 pb-1 text-xs font-semibold">
        <span className="flex items-center gap-1"><span className="tracking-[-2px]">●●●●○</span><FaWifi /></span>
        <span>{now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
        <span className="flex items-center gap-1">100% <FaBatteryThreeQuarters size={17} /></span>
      </div>

      <div className="relative z-10 flex h-[calc(100dvh-1.75rem)] flex-col">
        <div className="px-5 pb-2 pt-6">
          <p className="text-2xl font-semibold">Welcome, Visitor</p>
          <p className="text-sm text-white/70">{now.toLocaleDateString([], { weekday: "long", month: "long", day: "numeric" })}</p>
          <p lang="ar" dir="rtl" className="mt-0.5 w-fit text-sm text-white/60">{new Intl.DateTimeFormat("ar-MA-u-ca-islamic", { weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(now)}</p>
        </div>

        <div className="grid flex-1 grid-flow-row-dense content-start grid-cols-4 gap-x-1 gap-y-6 overflow-y-auto px-3 py-5">
          <div className="col-span-2 col-start-1 row-span-2">
            <Weather mobile />
          </div>
          {apps.map((app) => (
            <button key={app.id} onClick={() => setActiveApp(app.id)} className="flex min-w-0 flex-col items-center gap-1.5 active:scale-95">
              <span className="flex h-[72px] w-[72px] max-w-full items-center justify-center">
                <img src={app.icon} alt="" className="max-h-16 max-w-16 object-contain drop-shadow-lg" />
              </span>
              <span className="w-full truncate text-center text-xs font-medium drop-shadow">{app.label}</span>
            </button>
          ))}
          {socialApps.map((social) => {
            const SocialIcon = social.icon;
            return (
              <button
                key={social.id}
                onClick={() => window.open(social.url, "_blank", "noopener,noreferrer")}
                className="flex min-w-0 flex-col items-center gap-1.5 active:scale-95"
                aria-label={`Open ${social.label}`}
              >
                <span className={`flex h-16 w-16 max-w-full items-center justify-center rounded-2xl text-4xl text-white shadow-lg ${social.color}`}>
                  <SocialIcon />
                </span>
                <span className="w-full truncate text-center text-xs font-medium drop-shadow">{social.label}</span>
              </button>
            );
          })}
        </div>

        <div className="mx-4 mb-[max(12px,env(safe-area-inset-bottom))] flex h-20 items-center justify-around rounded-[24px] border border-white/45 bg-white/30 px-4 shadow-[0_10px_35px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-2xl backdrop-saturate-150">
          {apps.slice(0, 4).map((app) => (
            <button key={app.id} aria-label={app.label} onClick={() => setActiveApp(app.id)} className="h-14 w-14 p-0.5 active:scale-90">
              <img src={app.icon} alt="" className="h-full w-full object-contain" />
            </button>
          ))}
        </div>
      </div>

      <div ref={powerControlRef} className="group absolute right-0 top-1/2 z-20 flex h-20 w-16 -translate-y-1/2 items-center justify-end overflow-hidden">
        <button
          aria-label={powerExpanded ? "Lock screen" : "Show power button"}
          onClick={() => {
            if (powerExpanded) onLogout();
            else setPowerExpanded(true);
          }}
          className={`flex h-12 w-12 items-center justify-center rounded-l-xl bg-red-500 text-2xl font-bold text-white shadow-lg shadow-red-950/30 transition-transform duration-300 active:bg-red-600 group-hover:translate-x-0 ${powerExpanded ? "translate-x-0" : "translate-x-9"}`}
        >
          ⏻
        </button>
      </div>

      <AnimatePresence>
        {active && (
          <motion.section key={active.id} initial={{ y: "100%", scale: .96 }} animate={{ y: 0, scale: 1 }} exit={{ y: "100%", scale: .96 }} transition={{ type: "spring", damping: 28, stiffness: 260 }} className="absolute inset-0 z-30 flex flex-col bg-white text-zinc-900">
            <header className="flex h-[calc(3.5rem+env(safe-area-inset-top))] shrink-0 items-end bg-blue-600 px-2 pb-2 text-white shadow-md">
              <button aria-label="Back" onClick={() => setActiveApp(null)} className="flex h-9 w-9 items-center justify-center rounded-full active:bg-white/20"><MdArrowBack size={24} /></button>
              <div className="flex min-w-0 flex-1 items-center gap-2 px-2 font-semibold"><img src={active.icon} alt="" className="h-7 w-7 object-contain" /><span className="truncate">{active.label}</span></div>
              <button aria-label="Close" onClick={() => setActiveApp(null)} className="flex h-9 w-9 items-center justify-center rounded-full active:bg-white/20"><MdClose size={24} /></button>
            </header>
            <main className={`min-h-0 flex-1 overflow-y-auto overscroll-contain bg-white ${["about", "games", "videos"].includes(active.id) ? "p-0" : "p-3"}`}>{content[active.id]}</main>
            <nav className="flex h-[calc(3rem+env(safe-area-inset-bottom))] shrink-0 items-start justify-around border-t border-zinc-200 bg-zinc-50 pt-1 text-zinc-600">
              <button onClick={() => setActiveApp(null)} className="flex h-10 w-16 items-center justify-center rounded-lg active:bg-zinc-200"><MdArrowBack size={24} /></button>
              <button onClick={() => setActiveApp(null)} className="flex h-10 w-16 items-center justify-center rounded-lg active:bg-zinc-200"><MdHome size={25} /></button>
            </nav>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}

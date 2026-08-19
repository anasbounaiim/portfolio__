import React, { useState, useEffect } from "react";
import icon_portfolio from "../assets/portfolio-icon.png";
import cfpnc_group from "../assets/cp-banner.jpg";
import quran_brown from "../assets/quran_brown.png";
import water_use from "../assets/water_use.png";
import github_wall from "../assets/github-wall.png";
import retroTvProject from "../assets/retro-tv-project.png";
import subuzlaiProject from "../assets/subuzlai-project.png";
import damaProject from "../assets/dama-project.png";

import { IoClose } from "react-icons/io5";
import { FaReact, FaThumbtack } from "react-icons/fa";

import { FaPhp } from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiPostman } from "react-icons/si";

const Porfolio = () => {
  const [isLoadingContent, setIsLoadingContent] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoadingContent(false);
    }, 1000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
  };

  const handleCloseDetails = () => {
    setSelectedCard(null);
  };

  // Array of card data
  const cardsData = [
    {
      id: 1,
      emoji: "✈️👨‍✈️",
      color: "bg-green-500",
      image: cfpnc_group,
      name: "Data Manager & App Developer – CFPNC",
      title: "Fullstack Developer 👨‍💻",
      tech: ["ReactJS", "vite", "tailwind", "photoshop"],
      link: null,
      content:
        "Designed and implemented a secure academic data platform for CFPNC with dashboards, structured storage and registration management. The goal was to simplify data workflows while giving the team a clear, visual view of student records and training activities.",
    },
    {
      id: 2,
      emoji: "🌍💧",
      color: "bg-red-500",
      image: water_use,
      name: "AIEM – Event Web Site",
      title: "Front-End Developer 👨‍🎨👨‍💻",
      tech: ["ReactJS", "vite", "photoshop"],
      link: "https://aiem-event.vercel.app/",
      content:
        'Frontend for the event "La Gestion Durable de l’Eau, Vers Un Modèle Innovant et Résilient". Built with reusable React components, responsive layout and a clean UI for schedules, speakers and registration, to highlight innovation in water management.',
    },
    {
      id: 3,
      emoji: "🕋📿",
      color: "bg-yellow-800",
      image: quran_brown,
      name: "Read Quran Web App",
      title: "Front-End Developer 👨‍🎨👨‍💻",
      tech: ["ReactJS", "postman", "tailwind", "vite", "photoshop"],
      link: "https://a1muslim.netlify.app/",
      content:
        "An all-in-one Muslim web app: read Quran, follow prayer times, use Tasbih & Duaa, and explore the 99 Names of Allah. Designed to make daily spiritual practice easier and more accessible.",
    },
    {
      id: 4,
      emoji: "😽",
      color: "bg-indigo-500",
      image: github_wall,
      name: "🔗 Explore My GitHub 🔗",
      title: "",
      tech: ["Web", "AI", "ML", "Data Science"],
      link: "https://github.com/anasbounaiim",
      content:
        "Explore a wide range of projects: dynamic web apps, automation scripts, ML experiments and more. Each repository reflects my focus on clean code, problem-solving and learning through real-world use cases.",
    },
    {
      id: 5,
      emoji: "🎬🍿",
      color: "bg-emerald-600",
      image: github_wall,
      name: "KaguyaCiné – Web Ticket Booking",
      title: "Fullstack Project – Next.js & Spring Boot",
      tech: ["ReactJS", "tailwind", "postman"],
      link: null,
      content:
        "Cinema web app with movie catalog, seat booking, online payments and mood-based film recommendations. Built with Next.js on the frontend and Spring Boot microservices with PostgreSQL, Docker and Keycloak on the backend, plus GPT-4o for smart suggestions.",
    },
    {
      id: 6,
      emoji: "🚌📦",
      color: "bg-orange-500",
      image: github_wall,
      name: "Trans Ghazala – Transport Platform",
      title: "Front-End Developer 👨‍🎨",
      tech: ["ReactJS", "tailwind", "vite", "photoshop"],
      link: null,
      content:
        "Responsive web platform for a transport & logistics company, covering travel, tourism and parcel tracking. Built with Next.js, Tailwind CSS and modern UI libraries to deliver a modular, smooth and brand-aligned user experience.",
    },
    {
      id: 7,
      emoji: "📺 📻",
      color: "bg-amber-700",
      image: retroTvProject,
      name: "Moroccan Retro TV Experience",
      title: "Interactive Front-End Experience",
      tech: ["ReactJS", "tailwind"],
      link: "https://retro-tv-self.vercel.app/",
      content:
        "An interactive Moroccan nostalgia experience built around a detailed retro television room. Visitors can power on the TV, change channels and volume, use keyboard controls, explore objects in the room and enjoy a cinematic, responsive interface.",
    },
    {
      id: 8,
      emoji: "👾 🎮",
      color: "bg-fuchsia-700",
      image: subuzlaiProject,
      name: "Subuzlai Game",
      title: "Pixel-Art Browser Game",
      tech: ["ReactJS", "tailwind"],
      link: "https://subuzlai-game.vercel.app/",
      content:
        "A browser-based pixel-art game with a retro visual identity, animated loading experience and responsive gameplay interface. Built as a polished interactive web experience with a strong arcade-inspired presentation.",
    },
    {
      id: 9,
      emoji: "♟️ 🏁",
      color: "bg-rose-700",
      image: damaProject,
      name: "Moroccan Dama",
      title: "Next.js Strategy Game",
      tech: ["ReactJS", "tailwind"],
      link: "https://dama-game-rosy.vercel.app/",
      content:
        "A Moroccan-style dama game built with Next.js and Tailwind CSS. It combines traditional checkers gameplay with Moroccan-inspired visuals, custom game pieces and a focused, responsive game-board experience.",
    },
    {
      id: 10,
      emoji: "🧠 🌿",
      color: "bg-teal-600",
      name: "Innerkracht",
      title: "Hypnotherapy Wellness Website",
      tech: ["ReactJS", "tailwind"],
      link: "https://innerkracht.vercel.app/",
      content:
        "A calm, welcoming Dutch-language website for a hypnotherapy practice in Gavere. It presents personalized support for anxiety, stress, habits and old patterns through a thoughtful layout focused on emotional resilience, personal growth and inner calm.",
    },
    {
      id: 11,
      emoji: "🛡️ 🌐",
      color: "bg-slate-700",
      name: "SecureIT Hub",
      title: "Network Security Portfolio",
      tech: ["ReactJS", "tailwind"],
      link: "https://www.secureit-hub.com/",
      content:
        "A security-driven professional portfolio for a Network Security Engineer. The site presents expertise across Cisco, Fortinet, Zscaler, Linux, VPN operations and resilient production infrastructure through a precise, technical visual identity.",
    },
    {
      id: 12,
      emoji: "🛍️ 🛒",
      color: "bg-sky-600",
      name: "Asya Market",
      title: "E-Commerce Market Platform",
      tech: ["ReactJS", "tailwind"],
      link: "https://asya-market.vercel.app/",
      content:
        "A modern online market experience designed to present products through a clear and accessible shopping interface. The project focuses on responsive e-commerce presentation and straightforward product discovery.",
    },
    {
      id: 13,
      emoji: "🥥 🌿",
      color: "bg-lime-700",
      name: "Turath",
      title: "Moroccan Botanical Oils Website",
      tech: ["ReactJS", "tailwind"],
      link: "https://turath-website-nu.vercel.app/",
      content:
        "A refined product website for pure Moroccan cold-pressed botanical oils inspired by natural heritage. It presents argan and other essential oils through an elegant visual system centered on natural texture, gentle processing and simple daily care.",
    },
    // Add more cards as needed
  ];

  const orderedCards = [...cardsData].sort((a, b) => b.id - a.id);
  const selectedProject = cardsData.find((card) => card.id === selectedCard);

  return (
    <>
      {isLoadingContent ? (
        <div className="flex items-center justify-center h-[550px]">
          <div
            className="inline-block h-14 w-14 animate-spin rounded-full border-[6px] border-solid  border-blue-600 border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="absolute bg-blue-600 -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 clip-[rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      ) : (
        <div className="flex w-full min-w-0 justify-center animate__animated animate__fadeIn mt-4 sm:mt-16">
          <div className="flex w-full min-w-0 flex-col">
            <div className="flex justify-center">
              <h1 className="px-2 text-center text-4xl sm:text-5xl">My humble portfolio</h1>
            </div>

            {/* Display Cards */}
            <div className="mt-5 grid w-full grid-cols-3 gap-x-2 gap-y-5 md:gap-6">
              {orderedCards.map((card) => (
                <div
                  key={card.id}
                  className={`${card.id === 4 ? "order-first md:order-none" : ""} relative min-w-0 cursor-pointer w-full bg-transparent md:h-72 md:w-48 md:overflow-hidden md:rounded-md md:border md:border-gray-300 md:bg-white ${selectedCard === card.id ? "md:bg-gray-200" : ""
                    }`}
                  onClick={() => handleCardClick(card.id)}
                >
                  {card.id === 4 && (
                    <span className="absolute left-1.5 top-1.5 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-sm text-red-500 shadow-md md:hidden">
                      <FaThumbtack />
                    </span>
                  )}
                  <div className={`m-0 flex aspect-[3/4] w-full items-center justify-center overflow-hidden rounded-lg shadow-md md:h-32 md:aspect-auto md:rounded-none md:shadow-none ${card.color}`}>
                    <span className="text-4xl drop-shadow-lg md:text-5xl">{card.emoji}</span>
                  </div>

                  <h1 className="mt-1 line-clamp-2 break-words px-0 text-sm font-semibold leading-tight md:mt-0 md:px-3 md:pt-2 md:text-2xl md:font-extrabold">
                    {card.name}
                  </h1>
                  <p className="hidden break-words px-3 pt-1 text-sm leading-tight md:block">{card.title}</p>
                  <div className="hidden px-3 pb-4 pt-2 text-xs leading-relaxed text-gray-500 md:block">
                    {card.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Modal for Image with Text Details */}
            {selectedCard && (
              <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-3 sm:top-10 sm:p-6">
                <div className="relative max-h-[88dvh] min-h-[68dvh] w-full overflow-y-auto rounded-lg bg-white md:h-[70%] md:min-h-0 md:w-[70%]">
                  <div className="absolute right-1 top-1 z-10">
                    <button
                      className="rounded-full bg-black/25 p-1 text-white"
                      onClick={handleCloseDetails}
                    >
                      <IoClose className="text-2xl" />
                    </button>
                  </div>

                  <div className={`m-0 flex h-44 w-full items-center justify-center md:h-36 ${selectedProject.color}`}>
                    <span className="text-7xl drop-shadow-lg" aria-hidden="true">
                      {selectedProject.emoji}
                    </span>
                  </div>
                  <div className="px-4 pb-5 md:pb-0">
                    <a
                      href={selectedProject.link}
                      className="hover:underline cursor-pointer hover:duration-150"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h1 className="mt-3 break-words text-3xl font-extrabold sm:text-4xl">
                        {selectedProject.name}{" "}
                      </h1>
                    </a>
                    <p className="text-xl ">
                      {selectedProject.title}
                    </p>

                    {/* tech section */}
                    <p className="text-3xl flex items-center gap-1 mt-2">
                      {selectedProject.tech.includes("ReactJS") ? (
                        <span className="mr-1 text-cyan-400">
                          <FaReact />
                        </span>
                      ) : null}
                      {selectedProject.tech.includes("PHP") ? (
                        <span className="mr-1 text-violet-500">
                          <FaPhp />
                        </span>
                      ) : null}
                      {selectedProject.tech.includes("vite") ? (
                        <span className="mr-1 text-yellow-500 ">
                          <TbBrandVite />
                        </span>
                      ) : null}
                      {selectedProject.tech.includes(
                        "tailwind"
                      ) ? (
                        <span className="mr-1 text-cyan-500">
                          <SiTailwindcss />
                        </span>
                      ) : null}
                      {selectedProject.tech.includes(
                        "photoshop"
                      ) ? (
                        <span className="mr-1 text-blue-800 ">
                          <SiAdobephotoshop className="text-2xl" />
                        </span>
                      ) : null}
                      {selectedProject.tech.includes(
                        "postman"
                      ) ? (
                        <span className="mr-1 text-orange-500 ">
                          <SiPostman className="text-2xl" />
                        </span>
                      ) : null}
                    </p>

                    <p className="text-gray-500 text-sm pt-5">
                      {selectedProject.content}
                    </p>
                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white shadow-md active:bg-blue-700 md:hidden"
                      >
                        Open Project
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Porfolio;

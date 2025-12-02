import React, { useState, useEffect } from "react";
import icon_portfolio from "../../assets/portfolio-icon.png";
import cfpnc_group from "../../assets/cp-banner.jpg";
import quran_brown from "../../assets/quran_brown.png";
import water_use from "../../assets/water_use.png";
import github_wall from "../../assets/github-wall.png";

import { IoClose } from "react-icons/io5";
import { FaReact } from "react-icons/fa";

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
    // Add more cards as needed
  ];

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
        <div className="flex justify-center items-center animate__animated animate__fadeIn mt-16">
          <div className="flex flex-col">
            <div className="flex justify-center">
              <h1 className="text-5xl "> My humble portfolio</h1>
            </div>

            {/* Display Cards */}
            <div className="mt-4 grid grid-cols-3 gap-6 justify-center items-center">
              {cardsData.map((card) => (
                <div
                  key={card.id}
                  className={`cursor-pointer overflow-hidden w-48 h-72 border border-gray-300 rounded-md ${
                    selectedCard === card.id ? "bg-gray-200" : ""
                  }`}
                  onClick={() => handleCardClick(card.id)}
                >
                  <div
                    className={`w-full h-32 ${card.color} flex justify-center items-center m-0`}
                  >
                    <span className="text-5xl">{card.emoji}</span>
                  </div>

                  <h1 className="px-3 pt-1 max-h-[4.5rem] overflow-hidden text-2xl font-extrabold">
                    {card.name}
                  </h1>
                  <p className="px-3 leading-3 text-sm ">{card.title}</p>
                  <div className="px-3 text-gray-400 overflow-hidden text-xs max-h-[4.3rem] pt-2 leading-3 ">
                    {card.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Modal for Image with Text Details */}
            {selectedCard && (
              <div className="fixed top-10 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white rounded-md w-[70%] h-[70%] overflow-y-scroll ">
                  <div className="fixed w-[30rem]">
                    <button
                      className="text-white float-right relative top-1 right-1 "
                      onClick={handleCloseDetails}
                    >
                      <IoClose className="text-2xl" />
                    </button>
                  </div>

                  <div className="w-full h-36 overflow-hidden m-0">
                    <img
                      className="w-full"
                      src={cardsData[selectedCard - 1].image}
                      alt={`Details for Card ${selectedCard}`}
                    />
                  </div>
                  <div className="px-4">
                    <a
                      href={cardsData[selectedCard - 1].link}
                      className="hover:underline cursor-pointer hover:duration-150"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h1 className="text-4xl font-extrabold mt-3">
                        {cardsData[selectedCard - 1].name}{" "}
                      </h1>
                    </a>
                    <p className="text-xl ">
                      {cardsData[selectedCard - 1].title}
                    </p>

                    {/* tech section */}
                    <p className="text-3xl flex items-center gap-1 mt-2">
                      {cardsData[selectedCard - 1].tech.includes("ReactJS") ? (
                        <span className="mr-1 text-cyan-400">
                          <FaReact />
                        </span>
                      ) : null}
                      {cardsData[selectedCard - 1].tech.includes("PHP") ? (
                        <span className="mr-1 text-violet-500">
                          <FaPhp />
                        </span>
                      ) : null}
                      {cardsData[selectedCard - 1].tech.includes("vite") ? (
                        <span className="mr-1 text-yellow-500 ">
                          <TbBrandVite />
                        </span>
                      ) : null}
                      {cardsData[selectedCard - 1].tech.includes(
                        "tailwind"
                      ) ? (
                        <span className="mr-1 text-cyan-500">
                          <SiTailwindcss />
                        </span>
                      ) : null}
                      {cardsData[selectedCard - 1].tech.includes(
                        "photoshop"
                      ) ? (
                        <span className="mr-1 text-blue-800 ">
                          <SiAdobephotoshop className="text-2xl" />
                        </span>
                      ) : null}
                      {cardsData[selectedCard - 1].tech.includes(
                        "postman"
                      ) ? (
                        <span className="mr-1 text-orange-500 ">
                          <SiPostman className="text-2xl" />
                        </span>
                      ) : null}
                    </p>

                    <p className="text-gray-500 text-sm pt-5">
                      {cardsData[selectedCard - 1].content}
                    </p>
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

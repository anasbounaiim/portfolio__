import React, { useState, useEffect } from "react";
import icon_portfolio from "../../assets/portfolio-icon.png";
import { IoClose } from "react-icons/io5";

const Porfolio = () => {
  const [isLoadingContent, setIsLoadingContent] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    // Simulate loading by setting isLoading to false after a delay (e.g., 2 seconds)
    const loadingTimeout = setTimeout(() => {
      setIsLoadingContent(false);
    }, 1000);

    return () => clearTimeout(loadingTimeout); // Clean up the timeout if the component unmounts before loading completes
  }, []);

  const handleCardClick = (cardId) => {
    // Show details when a card is clicked
    setSelectedCard(cardId);
  };

  const handleCloseDetails = () => {
    // Close details when the modal is closed
    setSelectedCard(null);
  };

  // Array of card data
  const cardsData = [
    {
      id: 1,
      image: icon_portfolio, // Image source for card 1,
      name:" Data Manager and Application Developer CFPNC",
      title:"Front-End Developer👨‍🎨👨‍💻",
      link: null,
      content: "This project aims to develop a comprehensive registration data management application for a Center for Professional and New Skills Formation (CFPNC), including a powerful dashboard for data analysis. As data managers, our goal is to create a versatile software solution that simplifies registration management and provides advanced tools for academic data analysis. Additionally, the project encompasses the development of a pre-registration page, enhancing the overall user experience and streamlining the enrollment process.",
    },
    {
      id: 2,
      image: icon_portfolio, // Image source for card 2
      name:"AIEM Event Web Site",
      title:"Front-End Developer👨‍🎨👨‍💻",
      link: "https://www.aiemevent.org/",
      content: `The frontend website for the event "Aiem La Gestion Durable de L’Eau, Vers Un Modèle Innovant ET Résilient" was crafted using React.js, a powerful JavaScript library for building user interfaces. Leveraging React's modular architecture, the development process involved creating reusable components to structure the interface effectively. Tailwind CSS was employed for responsive styling, ensuring an appealing design across various devices. The website featured dynamic elements, such as interactive schedules, speaker profiles, and registration forms, enhancing user engagement. Through React's virtual DOM optimization, the website delivered a seamless and responsive experience, showcasing innovation in water management and resilience.`,
    },
    {
      id: 3,
      image: icon_portfolio, // Image source for card 3
      name:"Porject 3",
      title:"Front-End Developer👨‍🎨👨‍💻",
      link: "null",
      content: "Content for Card 3",
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
              {/* <img src={icon_portfolio} className="w-12 h-12 mr-4" alt="" /> */}
              <h1 className="text-5xl "> My humble portfolio</h1>
            </div>

            {/* Display Cards */}
            <div className="mt-4 grid grid-cols-3  gap-6 justify-center items-center">
              <div
                className={`cursor-pointer overflow-hidden w-48 h-72 border border-gray-300 rounded-md ${
                  selectedCard === 1 ? "bg-gray-200" : ""
                }`}
                onClick={() => handleCardClick(1)}
              >
                <div className="w-full h-32 bg-blue-500 m-0"></div>
                
                <h1 className="px-3 pt-1  max-h-[4.5rem] overflow-hidden  text-2xl font-extrabold">{cardsData[0].name}</h1>
                <p className="px-3 leading-3 text-sm ">{cardsData[0].title}</p>
                <p className="px-3 text-gray-400 overflow-hidden text-xs max-h-[4.3rem] pt-2 leading-3 ">  {cardsData[0].content} </p>
              </div>  
              <div
                className={`cursor-pointer overflow-hidden w-48 h-72 border border-gray-300 rounded-md ${
                  selectedCard === 1 ? "bg-gray-200" : ""
                }`}
                onClick={() => handleCardClick(2)}
              >
                <div className="w-full h-32 bg-red-500 m-0"></div>
                
                <h1 className="px-3 pt-1  max-h-[4.5rem] overflow-hidden   text-2xl font-extrabold">{cardsData[1].name}</h1>
                <p className="px-3 leading-3  text-sm ">{cardsData[1].title}</p>
                <p className="px-3 text-gray-400 overflow-hidden text-xs max-h-[4.3rem] pt-2 leading-3 ">{cardsData[1].content} </p>
              </div>
              <div
                className={`cursor-pointer overflow-hidden w-48 h-72 border border-gray-300 rounded-md ${
                  selectedCard === 1 ? "bg-gray-200" : ""
                }`}
                onClick={() => handleCardClick(3)}
              >
                <div className="w-full h-32 bg-green-500 m-0"></div>
                
                <h1 className="px-3 pt-1  max-h-[4.5rem] overflow-hidden text-2xl font-extrabold">{cardsData[2].name}</h1>
                <p className="px-3 leading-3 text-sm ">{cardsData[2].title}</p>
                <p className="px-3 text-gray-400 overflow-hidden text-xs max-h-[4.3rem] pt-2 leading-3 "> {cardsData[2].content}</p>
              </div>
             
              
              {/* Add more cards as needed */}
            </div>
          
            {/* Modal for Image with Text Details */}
            {selectedCard && (
              <div className="fixed top-10 left-0 w-full h-full bg-black  bg-opacity-50 flex items-center justify-center">
                <div className="bg-white  rounded-md w-[70%] h-[70%]  overflow-y-scroll ">
                  <div className="fixed w-[30rem]">
                  <button className="text-gray-500 float-right relative top-1 right-1 " onClick={handleCloseDetails}><IoClose className="text-2xl" /></button>
                  </div>
                  {/* Your image and text details go here */}
                  
                  <div className="w-full h-36 p-6 bg-red-500  m-0">
                    <img className="w-8" src={cardsData[selectedCard - 1].image} alt={`Details for Card ${selectedCard}`} />
                  </div>
                  <div className="px-4">

                  
                  <a href={cardsData[selectedCard-1].link} className=" hover:underline cursor-pointer hover:duration-150" target="_blank" rel="noopener noreferrer"><h1 className=" text-4xl font-extrabold mt-3">{cardsData[selectedCard - 1].name} </h1></a>
                <p className="  text-xl ">{cardsData[selectedCard - 1].title}</p>
                <p className=" text-gray-500 text-sm pt-5"> {cardsData[selectedCard - 1].content} </p>
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

import React, { useState, useEffect } from "react";
import icon_home from "../../assets/home-icon.png";
import planet from "../../assets/planet.png";
import salut from "../../assets/chimie.png";
import hand from "../../assets/board.png";
import rabbit from "../../assets/rabbit.png";
import logoExplain from "../../assets/logo-explain.jpg";

const Home = () => {
  const [isLoadingContent, setIsLoadingContent] = useState(true);

  useEffect(() => {
    // Simulate loading by setting isLoading to false after a delay (e.g., 2 seconds)
    const loadingTimeout = setTimeout(() => {
      setIsLoadingContent(false);
    }, 1000);

    return () => clearTimeout(loadingTimeout); // Clean up the timeout if the component unmounts before loading completes
  }, []);



  const images = [
    salut, // Replace with actual image URLs
    hand,
    planet,
    rabbit,
    icon_home

  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 400);

    return () => clearInterval(intervalId);
  }, [images.length]);
  return (
    <>
      {isLoadingContent ? (
        <div className="flex items-center justify-center h-[500px]">
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
        <div className="animate__animated animate__fadeIn pb-6">
          <div className="flex justify-center items-center ">
            {/* <img src={icon_home} className="w-12 h-12 mr-4" alt="" /> */}
            <h1 className="text-5xl text-center font-black px-8 py-5 font-serif"> What is this website ? Why i made this website ?</h1>
          </div>
          <div className="">
          <img
              src={images[currentImageIndex]}
              className="w-40 h-40 mr-8 my-5 ml-2 float-right "
              alt=""
            />
            </div>
          <p class="font-serif px-9 text-2xl py-4 text-ellipsis indent-8 break-all">
            
            Behold, the digital masterpiece I proudly present – my portfolio
            website! Drawing inspiration from the familiar Windows interface,
            I've conjured a virtual realm that combines technology and
            enchantment in the most delightful way. With the wave of my magic
            wand (or rather, my magic stick), I've woven an interactive
            experience that's both nostalgic and innovative. But wait, the tale
            doesn't end there! Along this creative journey, I had the privilege
            of receiving guidance from two extraordinary sources. The wise and
            stealthy ninja, a symbol of precision and skill, lent their
            expertise to ensure seamless navigation and user-friendly design.
            Meanwhile, the enigmatic magician, a maestro of wonder and surprise,
            whispered secrets of captivating visuals and engaging content.
            Together, this collaboration of the mystical and the modern has
            brought forth a website that's not just a mere digital canvas, but a
            portal to a world where imagination meets functionality. As you
            explore my portfolio, you'll witness the fusion of artistic
            expression and technical prowess, all while being guided by the
            subtle presence of the ninja's finesse and the magician's charm. So,
            welcome, wanderer, to my corner of the web where Windows aesthetics
            dance with the enchantment of my magic stick – a testament to the
            power of creativity, collaboration, and the wonders that unfold when
            we dare to dream.
          </p>
        </div>
      )}
    </>
  );
};

export default Home;

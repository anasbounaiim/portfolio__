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
    const loadingTimeout = setTimeout(() => {
      setIsLoadingContent(false);
    }, 1000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  const images = [salut, hand, planet, rabbit, icon_home];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % images.length
      );
    }, 400);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <>
      {isLoadingContent ? (
        <div className="flex items-center justify-center h-[500px]">
          <div
            className="inline-block h-14 w-14 animate-spin rounded-full border-[6px] border-solid border-blue-600 border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="absolute bg-blue-600 -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 clip-[rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      ) : (
        <div className="animate__animated animate__fadeIn overflow-visible py-5">
          <div className="flex justify-center items-center">
            <h1 className="text-5xl text-center font-black px-11 py-5 font-serif underline">
              What is this website? Why did I build it?
            </h1>
          </div>

          <div>
            <img
              src={images[currentImageIndex]}
              className="w-40 h-40 mr-8 my-5 ml-2 float-right"
              alt=""
            />
          </div>

          <p className="font-serif px-9 text-2xl py-4 text-ellipsis break-all">
            <span className="text-[130px] float-left py-6 px-3">B</span>ehind
            this small “Windows-style” desktop, there is simply my story as a{" "}
            <strong>developer and IT professional</strong>.  
            This website is my personal playground where I bring together
            everything I do:{" "}
            <strong>
              Service Desk / Support, full-stack development, cloud, big data
            </strong>{" "}
            and a bit of design.
            <br />
            <br />
            I wanted a portfolio that feels like opening your own PC: icons,
            windows, chat bubbles, small details everywhere. Each section is a
            “window” into a part of my journey:
            <br />
            – the <strong>About</strong> page as a friendly chat about my path  
            – the <strong>Portfolio</strong> as real projects I’ve built  
            – and links to my <strong>CV</strong>, <strong>GitHub</strong> and{" "}
            <strong>LinkedIn</strong>.
            <br />
            <br />
            My background mixes{" "}
            <strong>
              IT Service Desk (Econocom, HCL Tech), troubleshooting in real
              production environments
            </strong>{" "}
            and{" "}
            <strong>
              web development with React, Next.js, Spring Boot, PostgreSQL,
              Docker, cloud &amp; AI
            </strong>
            . I support users and developers on one side, and I build things
            on the other. This portfolio is where both worlds meet.
            <br />
            <br />
            If you’re here as a recruiter, manager or just a curious person,
            this site is made to show you how I think, how I organize my work
            and how I like to design experiences – simple, clear and a bit
            playful. Feel free to explore, open windows, read the stories and
            click through the projects.
            <br />
            <span className="float-right text-base font-serif pb-6 font-bold">
              – Anas Bounaim
            </span>
          </p>
        </div>
      )}
    </>
  );
};

export default Home;

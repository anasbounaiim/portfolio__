import React, { useState, useEffect } from "react";
import icon_home from "../../assets/home-icon.png";
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
        <div className="animate__animated animate__fadeIn">
          <div className="flex justify-center items-center ">
            <img src={icon_home} className="w-12 h-12 mr-4" alt="" />
            <h1 className="text-5xl "> Home</h1>
          </div>

          <div className="w-[25%] h-72 bg-blue-500 rounded-lg m-4"></div>
          <div className="w-[50%] h-72 bg-orange-400 rounded-lg m-4"></div>
          <div className="w-[75%] h-72 bg-red-400 rounded-lg m-4"></div>
          <div className="w-[97%] h-72 bg-green-400 rounded-lg m-4"></div>
        </div>
      )}
    </>
  );
};

export default Home;

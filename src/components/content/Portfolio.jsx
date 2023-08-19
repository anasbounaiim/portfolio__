import React, { useState, useEffect } from "react";
import icon_portfolio from "../../assets/portfolio-icon.png";

const Porfolio = () => {
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
        <div className="flex justify-center items-center animate__animated animate__fadeIn">
          <img src={icon_portfolio} className="w-12 h-12 mr-4" alt="" />
          <h1 className="text-5xl "> Portfolio</h1>
        </div>
      )}
    </>
  );
};

export default Porfolio;

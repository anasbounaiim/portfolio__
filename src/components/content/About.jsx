import React, { useState, useEffect } from "react";
import icon_about from "../../assets/web_tec.jpg";
import icon_about1 from "../../assets/web_tec1.jpg";
import icon_about2 from "../../assets/web_tec3.jpg";

const About = () => {
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
        <div className="flex items-center justify-center h-[490px] ">
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
        <div className=" flex flex-col animate__animated animate__fadeIn font-medium">
          
          <div className="w-full shadow-sm h-12 px-4 py-6 flex flex-row items-center fixed bg-gray-100">
            <div className="rounded-full w-8 h-8 mr-1 bg-green-400">
              {" "}
              <img
                src="https://ui-avatars.com/api/?name=k+7&rounded=true&size=40&color=FFFFFF&background=AAAAAA"

                alt=""
              />
            </div>
            <span className="capitalize leading-4 ml-1">Kira7 <br /><span className="text-xs flex flex-row items-center text-gray-400"> <div className="w-2 h-2 bg-green-400 rounded-full mr-1 "></div>Active Now</span></span>
          </div>


          <div className="mt-12">
          <p className="flex justify-center my-2 font-normal text-gray-400">- Day in life -</p>
          {/* HIM */}
          <div className="my-3 ml-4 flex flex-row items-end text-white ">
            <div className="rounded-full w-10 h-10 mr-1 bg-green-400">
              {" "}
              <img
                src="https://ui-avatars.com/api/?name=K+7&rounded=true&size=40&color=FFFFFF&background=AAAAAA"
                className="mr-2"
                alt=""
              />
            </div>
            <span className=" bg-blue-500 w-80 rounded-t-lg rounded-br-lg p-2">
            Hello , i've visited your website and I'm quite impressed. I would like to get to know you better.
            </span>
          </div>
          {/* ME */}
          <div className=" my-3 flex flex-row items-end ml-[17.6rem]  ">
            <span className="bg-gray-200 rounded-t-lg rounded-bl-lg p-2 w-80">
              Hey, it's BOUNAIM Anas "The enigmatic dev" who unleashes boundless
              creativity to bring ideas to life screens both big & small ONE
              LINE OF CODE AT A TIME. Don't be shy and say hi !{" "}
              <span className="underline">anasbounaiim1@gmail.com</span>
            </span>
            <div className="rounded-full w-10 h-10 ml-1 bg-red-300">
              {" "}
              <img
                src="https://ui-avatars.com/api/?name=Anas+Bounaim&rounded=true&size=40&color=880808&background=FAA0A0"
                className="mr-2"
                alt=""
              />
            </div>
          </div>
           {/* HIM */}
           <div className="my-3 ml-4 flex flex-row items-end text-white ">
            <div className="rounded-full w-10 h-10 mr-1 bg-green-400">
              {" "}
              <img
                src="https://ui-avatars.com/api/?name=K+7&rounded=true&size=40&color=FFFFFF&background=AAAAAA"
                className="mr-2"
                alt=""
              />
            </div>
            <span className=" bg-blue-500 w-80 rounded-t-lg rounded-br-lg p-2">
            ah you're a developer, what technologies do you use?
            </span>
          </div>
          {/* ME */}
          <div className=" my-3 flex flex-row items-end ml-[17.7rem]  ">
            <div className="flex flex-col space-y-3">
            <span className="bg-gray-200 rounded-t-lg rounded-bl-lg p-2 w-80">
            In my toolkit, I rely on React.js for building dynamic user interfaces and Tailwind CSS for efficient styling. With these, I create engaging web front-ends. PHP and Java are my trusted choices for server-side logic, ensuring robust and responsive web applications.
            </span>
            <span className="bg-gray-200 rounded-t-lg rounded-bl-lg p-2 w-80">
            In the world of design, Photoshop is my go-to for image manipulation and enhancement. Meanwhile, Figma assists in collaborative interface design, helping me strike the perfect balance between creativity and usability. These design technologies are essential for making visual elements shine.</span>
            <span className="bg-gray-200 rounded-t-lg rounded-bl-lg p-2 w-80">
            GitHub is my essential tool for project organization and collaboration. It offers version control and fosters smooth teamwork, enabling me to harmoniously integrate creativity and functionality into standout web solutions.</span>
            </div>
            <div className="rounded-full w-10 h-10 ml-1 bg-red-300">
              {" "}
              <img
                src="https://ui-avatars.com/api/?name=Anas+Bounaim&rounded=true&size=40&color=880808&background=FAA0A0"
                className="mr-2"
                alt=""
              />
            </div>
          </div>
           {/* HIM */}
           <div className="my-3 ml-4 flex flex-row items-end text-white ">
            <div className="rounded-full w-10 h-10 mr-1 bg-green-400">
              {" "}
              <img
                src="https://ui-avatars.com/api/?name=K+7&rounded=true&size=40&color=FFFFFF&background=AAAAAA"
                className="mr-2"
                alt=""
              />
            </div>
            <span className=" bg-blue-500 w-80 rounded-t-lg rounded-br-lg p-2">
            Your toolkit is an impressive blend of technology and creativity.!
            </span>
          </div>
            {/* ME */}
            <div className=" my-3 flex flex-row items-end ml-[21.8rem]  ">
            <div className="flex flex-col ">
              <img className="bg-gray-300 rounded-t-lg rounded-bl-lg p-1 my-1 w-64" src={icon_about} alt="" />
              <img className="bg-gray-300 rounded-t-lg rounded-bl-lg p-1 my-1 w-64" src={icon_about1} alt="" />
              <img className="bg-gray-300 rounded-t-lg rounded-bl-lg p-1 my-1 w-64" src={icon_about2} alt="" />
             
           </div>
            <div className="rounded-full w-10 h-10 ml-1 bg-red-300">
              {" "}
              <img
                src="https://ui-avatars.com/api/?name=Anas+Bounaim&rounded=true&size=40&color=880808&background=FAA0A0"
                className="mr-2"
                alt=""
              />
            </div>
          </div>

           {/* HIM */}
           <div className="my-3 ml-4 flex flex-row items-end text-white ">
            <div className="rounded-full w-10 h-10 mr-1 bg-green-400">
              {" "}
              <img
                src="https://ui-avatars.com/api/?name=K+7&rounded=true&size=40&color=FFFFFF&background=AAAAAA"
                className="mr-2"
                alt=""
              />
            </div>
            <span className=" bg-blue-500 w-80 rounded-t-lg rounded-br-lg p-2">
            HHHHHHHHHHHHHHHHHHHHHHHHHH
            </span>
          </div>
          
          </div>
        </div>
      )}
    </>
  );
};

export default About;

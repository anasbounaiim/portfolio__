import React, { useState, useEffect } from "react";
import { IoSend } from "react-icons/io5";
import MyCV from "../../assets/AnasBounaimCV.pdf"

import icon_about from "../../assets/web_tec.jpg";
import icon_about1 from "../../assets/web_tec1.jpg";
import icon_about2 from "../../assets/web_tec3.jpg";

import "animate.css";

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
          
          <div className="w-full shadow-sm h-[3.4rem] px-4 py-6 pt-7 flex flex-row items-center fixed bg-gray-100 animate__animated animate__fadeInDown z-40">
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
          <p className="flex justify-center my-2 font-normal text-gray-400 animate__animated animate__fadeIn">- Day in life -</p>
        {/* Start */}
{/* HIM */}
<div className="my-3 ml-4 flex flex-row items-end text-white animate__animated animate__slideInLeft animate__delay-1s">
  <div className="rounded-full w-10 h-10 mr-1 bg-green-400">
    <img
      src="https://ui-avatars.com/api/?name=K+7&rounded=true&size=40&color=FFFFFF&background=AAAAAA"
      alt=""
    />
  </div>
  <span className="bg-blue-500 w-80 rounded-t-lg rounded-br-lg p-2">
    Hey Anas! 👋 I was looking at your LinkedIn profile, and wow, your academic and professional journey is inspiring! Can we talk about it? 🧐
  </span>
</div>

{/* ME */}
<div className="my-3 flex flex-row items-end ml-[17.6rem] animate__animated animate__slideInRight animate__delay-1s">
  <span className="bg-gray-200 rounded-t-lg rounded-bl-lg p-2 w-80">
    Thanks! 😊 Sure, I’d love to share. My academic journey began at the <strong>Institut Spécialisé de Technologie Appliquée NTIC</strong>, where I earned my degree in IT from 2020 to 2022. From there, I went on to complete a professional license in Web and Mobile Development at <strong>ENSET Mohammedia</strong> from October 2022 to August 2023. 🎓
  </span>
  <div className="rounded-full w-10 h-10 ml-1 bg-red-300">
    <img
      src="https://ui-avatars.com/api/?name=Anas+Bounaim&rounded=true&size=40&color=880808&background=FAA0A0"
      alt=""
    />
  </div>
</div>

{/* HIM */}
<div className="my-3 ml-4 flex flex-row items-end text-white animate__animated animate__slideInLeft animate__delay-1s">
  <div className="rounded-full w-10 h-10 mr-1 bg-green-400">
    <img
      src="https://ui-avatars.com/api/?name=K+7&rounded=true&size=40&color=FFFFFF&background=AAAAAA"
      alt=""
    />
  </div>
  <span className="bg-blue-500 w-80 rounded-t-lg rounded-br-lg p-2">
    That’s impressive! And now you’re pursuing a Master’s at ENSET Mohammedia, right? What’s your focus there? 📚
  </span>
</div>

{/* ME */}
<div className="my-3 flex flex-row items-end ml-[17.6rem] animate__animated animate__slideInRight animate__delay-1s">
  <span className="bg-gray-200 rounded-t-lg rounded-bl-lg p-2 w-80">
    Yes! 🎓 I’m currently pursuing a Master’s in <strong>Big Data and Cloud Computing</strong> (2023–2025). My focus areas include distributed systems, machine learning with TensorFlow 🤖, big data frameworks like Hadoop and Spark 📊, and cloud platforms like AWS and GCP ☁️. It’s intense but very exciting!
  </span>
  <div className="rounded-full w-10 h-10 ml-1 bg-red-300">
    <img
      src="https://ui-avatars.com/api/?name=Anas+Bounaim&rounded=true&size=40&color=880808&background=FAA0A0"
      alt=""
    />
  </div>
</div>

{/* HIM */}
<div className="my-3 ml-4 flex flex-row items-end text-white animate__animated animate__slideInLeft animate__delay-1s">
  <div className="rounded-full w-10 h-10 mr-1 bg-green-400">
    <img
      src="https://ui-avatars.com/api/?name=K+7&rounded=true&size=40&color=FFFFFF&background=AAAAAA"
      alt=""
    />
  </div>
  <span className="bg-blue-500 w-80 rounded-t-lg rounded-br-lg p-2">
    That’s an impressive academic profile! Now, let’s talk about your work experience. I know you’re a Senior Analyst at HCL. What’s that like? 🚀
  </span>
</div>

{/* ME */}
<div className="my-3 flex flex-row items-end ml-[17.6rem] animate__animated animate__slideInRight animate__delay-1s">
  <span className="bg-gray-200 rounded-t-lg rounded-bl-lg p-2 w-80">
    It’s been an incredible experience! Since November 2024, I’ve been working at HCL as a Senior Analyst. I focus on optimizing IT systems, analyzing big data, and implementing cloud solutions 🌐. It’s the perfect place to apply what I’m learning academically and professionally. 💻
  </span>
  <div className="rounded-full w-10 h-10 ml-1 bg-red-300">
    <img
      src="https://ui-avatars.com/api/?name=Anas+Bounaim&rounded=true&size=40&color=880808&background=FAA0A0"
      alt=""
    />
  </div>
</div>

{/* HIM */}
<div className="my-3 ml-4 flex flex-row items-end text-white animate__animated animate__slideInLeft animate__delay-1s">
  <div className="rounded-full w-10 h-10 mr-1 bg-green-400">
    <img
      src="https://ui-avatars.com/api/?name=K+7&rounded=true&size=40&color=FFFFFF&background=AAAAAA"
      alt=""
    />
  </div>
  <span className="bg-blue-500 w-80 rounded-t-lg rounded-br-lg p-2">
    That’s amazing! Before HCL, you worked at Econocom Maroc, right? What was your role there? 🧐
  </span>
</div>

{/* ME */}
<div className="my-3 flex flex-row items-end ml-[17.6rem] animate__animated animate__slideInRight animate__delay-1s">
  <span className="bg-gray-200 rounded-t-lg rounded-bl-lg p-2 w-80">
    That’s correct! From September 2022 to October 2024, I was a Service Desk Analyst. My role included resolving Level 1/2 technical issues 🖥️, Active Directory maintenance 🌐, and troubleshooting Windows systems. It taught me a lot about problem-solving and communication. 🤝
  </span>
  <div className="rounded-full w-10 h-10 ml-1 bg-red-300">
    <img
      src="https://ui-avatars.com/api/?name=Anas+Bounaim&rounded=true&size=40&color=880808&background=FAA0A0"
      alt=""
    />
  </div>
</div>

{/* HIM */}
<div className="my-3 ml-4 flex flex-row items-end text-white animate__animated animate__slideInLeft animate__delay-1s">
  <div className="rounded-full w-10 h-10 mr-1 bg-green-400">
    <img
      src="https://ui-avatars.com/api/?name=K+7&rounded=true&size=40&color=FFFFFF&background=AAAAAA"
      alt=""
    />
  </div>
  <span className="bg-blue-500 w-80 rounded-t-lg rounded-br-lg p-2">
    So impressive! What’s your ultimate dream for your career? 🌈
  </span>
</div>

{/* ME */}
<div className="my-3 flex flex-row items-end ml-[17.6rem] animate__animated animate__slideInRight animate__delay-1s">
  <span className="bg-gray-200 rounded-t-lg rounded-bl-lg p-2 w-80">
    My dream? To lead innovative cloud and AI projects 🤖☁️ that solve real-world problems 🌍. I also want to inspire future developers by mentoring them and sharing what I’ve learned. 🚀
  </span>
  <div className="rounded-full w-10 h-10 ml-1 bg-red-300">
    <img
      src="https://ui-avatars.com/api/?name=Anas+Bounaim&rounded=true&size=40&color=880808&background=FAA0A0"
      alt=""
    />
  </div>
</div>

{/* HIM */}
<div className="my-3 ml-4 flex flex-row items-end text-white animate__animated animate__slideInLeft animate__delay-1s">
  <div className="rounded-full w-10 h-10 mr-1 bg-green-400">
    <img
      src="https://ui-avatars.com/api/?name=K+7&rounded=true&size=40&color=FFFFFF&background=AAAAAA"
      alt=""
    />
  </div>
  <span className="bg-blue-500 w-80 rounded-t-lg rounded-br-lg p-2">
    That’s incredible, Anas! 🌟 You’re not just building a career—you’re shaping the future of tech and inspiring others along the way. 🙌
  </span>
</div>

{/* ME - LinkedIn and CV Message */}
<div className="my-3 flex flex-row items-end ml-[17.6rem] animate__animated animate__slideInRight animate__delay-1s">
  <span className="bg-gray-200 rounded-t-lg rounded-bl-lg p-2 w-80">
    Thanks a lot! 😊 If you’d like to connect or know more about me, here are some links:
    <ul className="mt-2">
      <li>
        🔗 <a href="https://www.linkedin.com/in/anas-bounaim-37450621a/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">My LinkedIn Profile</a>
      </li>
      <li>
        📄 <a href={MyCV} download className="text-blue-500 underline">Download My CV</a>
      </li>
    </ul>
  </span>

</div>

<div className=" my-3 flex flex-row items-end ml-[21.8rem]  animate__animated animate__slideInRight animate__delay-1s ">
            <div className="flex flex-col ">
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
<div className="my-3 mb-16 ml-4 flex flex-row items-end text-white animate__animated animate__slideInLeft animate__delay-1s">
  <div className="rounded-full w-10 h-10 mr-1 bg-green-400">
    <img
      src="https://ui-avatars.com/api/?name=K+7&rounded=true&size=40&color=FFFFFF&background=AAAAAA"
      alt=""
    />
  </div>
  <span className="bg-blue-500 w-80 rounded-t-lg rounded-br-lg p-2">
    Perfect! I’ll definitely connect with you on LinkedIn and download your CV. Thanks for sharing! 😊
  </span>
</div>







{/* End */}
{/* INPUT SECTION */}
<div className="fixed bottom-0 left-0 w-full mt-10 bg-gray-100 border-t border-gray-300 p-3 flex items-center">
  <input
    type="text"
    placeholder="Type your message here..."
    className="w-full bg-white rounded-full px-4 py-2 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
    disabled
  />
  <button
    className="ml-3 bg-blue-500 text-white px-2 py-2 rounded-full font-semibold cursor-not-allowed"
    disabled
  >
    <IoSend size={19}/>
  </button>
</div>
          
          </div>
        </div>
      )}
    </>
  );
};

export default About;

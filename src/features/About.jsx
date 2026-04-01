import React, { useState, useEffect } from "react";
import { IoSend } from "react-icons/io5";
import MyCV from "../assets/AnasBounaimCV.pdf";

import icon_about from "../assets/web_tec.jpg";
import icon_about1 from "../assets/web_tec1.jpg";
import icon_about2 from "../assets/web_tec3.jpg";

import "animate.css";

const About = () => {
  const [isLoadingContent, setIsLoadingContent] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoadingContent(false);
    }, 1000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div className="h-full w-full bg-white flex flex-col overflow-hidden">
      {isLoadingContent ? (
        <div className="flex items-center justify-center h-full min-h-[400px]">
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
        <div className="relative flex flex-col h-full font-medium overflow-hidden">
          {/* Sticky Header */}
          <div className="sticky top-0 w-full shadow-sm h-[3.4rem] px-4 pt-1 flex flex-row items-center bg-gray-50/95 backdrop-blur-sm z-40 border-b border-gray-100 flex-shrink-0">
            <div className="rounded-full w-9 h-9 mr-2 bg-gray-300 overflow-hidden border border-gray-200">
              <img
                src="https://ui-avatars.com/api/?name=k+7&rounded=true&size=40&color=FFFFFF&background=AAAAAA"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-sm font-bold text-gray-800 leading-tight">Kira7</span>
              <span className="text-[10px] flex items-center text-gray-400 font-normal">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></div>
                Active Now
              </span>
            </div>
          </div>

          {/* Scrollable Chat Area */}
          <div className="flex-1 overflow-y-auto px-4 py-2 scroll-smooth bg-white">
            <p className="flex justify-center my-4 font-normal text-[11px] text-gray-400 tracking-wider">
              - DAY IN LIFE -
            </p>

            {/* Conversation */}
            {/* HIM */}
            <div className="my-4 flex flex-row items-end text-white animate__animated animate__fadeInLeft">
              <div className="rounded-full w-8 h-8 mr-2 bg-gray-200 flex-shrink-0 border border-gray-100">
                <img src="https://ui-avatars.com/api/?name=K+7&rounded=true&size=32&color=FFFFFF&background=AAAAAA" alt="" />
              </div>
              <div className="bg-blue-600 max-w-[70%] rounded-2xl rounded-bl-none px-4 py-2.5 text-[13px] leading-relaxed shadow-sm">
                Hey Anas! 👋 I was reading your CV and saw your journey from support to full-stack development. Can we talk about it? 🧐
              </div>
            </div>

            {/* ME */}
            <div className="my-4 flex flex-row items-end justify-end animate__animated animate__fadeInRight">
              <div className="bg-gray-100 text-gray-800 max-w-[70%] rounded-2xl rounded-br-none px-4 py-2.5 text-[13px] leading-relaxed shadow-sm border border-gray-200">
                Sure! 😊 I started with a <strong>Scientific Baccalaureate – Physics & Chemistry</strong> in 2019 at Moulay Teyeb El Alaoui in Salé. Then I completed a <strong>Diploma of Specialized Technician in Software & Web Development</strong> at <strong>ISTA NTIC</strong> from 2020 to 2022, where I built my foundations in programming and web technologies. 🎓
              </div>
              <div className="rounded-full w-8 h-8 ml-2 bg-red-100 flex-shrink-0 border border-red-200">
                <img src="https://ui-avatars.com/api/?name=Anas+Bounaim&rounded=true&size=32&color=880808&background=FAA0A0" alt="" />
              </div>
            </div>

            {/* HIM */}
            <div className="my-4 flex flex-row items-end text-white animate__animated animate__fadeInLeft">
              <div className="rounded-full w-8 h-8 mr-2 bg-gray-200 flex-shrink-0 border border-gray-100">
                <img src="https://ui-avatars.com/api/?name=K+7&rounded=true&size=32&color=FFFFFF&background=AAAAAA" alt="" />
              </div>
              <div className="bg-blue-600 max-w-[70%] rounded-2xl rounded-bl-none px-4 py-2.5 text-[13px] leading-relaxed shadow-sm">
                Nice! And then you moved to ENSET for higher studies, right? 📚
              </div>
            </div>

            {/* ME */}
            <div className="my-4 flex flex-row items-end justify-end animate__animated animate__fadeInRight">
              <div className="bg-gray-100 text-gray-800 max-w-[70%] rounded-2xl rounded-br-none px-4 py-2.5 text-[13px] leading-relaxed shadow-sm border border-gray-200">
                Exactly! I did a <strong>Bachelor's Degree in Web and Mobile Development</strong> at <strong>ENSET – Hassan II University</strong> from 2022 to 2023, then continued with a <strong>Master's Degree in IT Engineering, Big Data & Cloud Computing</strong> from 2023 onwards. I'm focusing on scalable web apps, APIs, and cloud-native architectures using technologies like <strong>React, Next.js, Spring Boot, Docker and PostgreSQL</strong>.
              </div>
              <div className="rounded-full w-8 h-8 ml-2 bg-red-100 flex-shrink-0 border border-red-200">
                <img src="https://ui-avatars.com/api/?name=Anas+Bounaim&rounded=true&size=32&color=880808&background=FAA0A0" alt="" />
              </div>
            </div>

            {/* HIM */}
            <div className="my-4 flex flex-row items-end text-white animate__animated animate__fadeInLeft">
              <div className="rounded-full w-8 h-8 mr-2 bg-gray-200 flex-shrink-0 border border-gray-100">
                <img src="https://ui-avatars.com/api/?name=K+7&rounded=true&size=32&color=FFFFFF&background=AAAAAA" alt="" />
              </div>
              <div className="bg-blue-600 max-w-[70%] rounded-2xl rounded-bl-none px-4 py-2.5 text-[13px] leading-relaxed shadow-sm">
                Your current role at HCL Tech looks intense. What do you actually do there? 🚀
              </div>
            </div>

            {/* ME */}
            <div className="my-4 flex flex-row items-end justify-end animate__animated animate__fadeInRight">
              <div className="bg-gray-100 text-gray-800 max-w-[70%] rounded-2xl rounded-br-none px-4 py-2.5 text-[13px] leading-relaxed shadow-sm border border-gray-200">
                Since <strong>October 2024</strong>, I've been working as a <strong>Senior IT Service Desk Analyst at HCL Tech</strong>. I automate workflows with <strong>Python and JavaScript</strong>, debug issues via logs and configs, support <strong>SAP GUI/Fiori</strong>, work with <strong>SCCM, Azure AD, Citrix VDI, ServiceNow</strong>, and handle network issues like <strong>VPN, DNS and Zscaler</strong>. I also support developers with their tools, environments and API access. 💻
              </div>
              <div className="rounded-full w-8 h-8 ml-2 bg-red-100 flex-shrink-0 border border-red-200">
                <img src="https://ui-avatars.com/api/?name=Anas+Bounaim&rounded=true&size=32&color=880808&background=FAA0A0" alt="" />
              </div>
            </div>

            {/* HIM */}
            <div className="my-4 flex flex-row items-end text-white animate__animated animate__fadeInLeft">
              <div className="rounded-full w-8 h-8 mr-2 bg-gray-200 flex-shrink-0 border border-gray-100">
                <img src="https://ui-avatars.com/api/?name=K+7&rounded=true&size=32&color=FFFFFF&background=AAAAAA" alt="" />
              </div>
              <div className="bg-blue-600 max-w-[70%] rounded-2xl rounded-bl-none px-4 py-2.5 text-[13px] leading-relaxed shadow-sm">
                And before HCL, you spent two years at Econocom Maroc, right? What did you learn there? 🧐
              </div>
            </div>

            {/* ME */}
            <div className="my-4 flex flex-row items-end justify-end animate__animated animate__fadeInRight">
              <div className="bg-gray-100 text-gray-800 max-w-[70%] rounded-2xl rounded-br-none px-4 py-2.5 text-[13px] leading-relaxed shadow-sm border border-gray-200">
                Yes! At <strong>Econocom Maroc</strong>, I delivered <strong>L1/L2 support</strong>, analyzed deployments with <strong>SCCM</strong>, handled <strong>SAP access issues</strong>, and troubleshot complex Windows environments. It gave me a strong production mindset and a customer-focused way of working. 🤝
              </div>
              <div className="rounded-full w-8 h-8 ml-2 bg-red-100 flex-shrink-0 border border-red-200">
                <img src="https://ui-avatars.com/api/?name=Anas+Bounaim&rounded=true&size=32&color=880808&background=FAA0A0" alt="" />
              </div>
            </div>

            {/* HIM */}
            <div className="my-4 flex flex-row items-end text-white animate__animated animate__fadeInLeft">
              <div className="rounded-full w-8 h-8 mr-2 bg-gray-200 flex-shrink-0 border border-gray-100">
                <img src="https://ui-avatars.com/api/?name=K+7&rounded=true&size=32&color=FFFFFF&background=AAAAAA" alt="" />
              </div>
              <div className="bg-blue-600 max-w-[70%] rounded-2xl rounded-bl-none px-4 py-2.5 text-[13px] leading-relaxed shadow-sm">
                What about your development side? I saw projects like KaguyaCiné and Trans Ghazala on your CV. 🌐
              </div>
            </div>

            {/* ME - Unified Message (Dev, Links, and Image) */}
            <div className="my-6 flex flex-row items-end justify-end animate__animated animate__fadeInRight">
              <div className="flex flex-col items-end max-w-[75%]">
                <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-br-none px-5 py-3 text-[13px] leading-relaxed shadow-sm border border-gray-200 w-full mb-2">
                  On the dev side, <strong>KaguyaCiné</strong> is a cinema web app with seat booking and mood-based recommendations using <strong>Next.js, Spring Boot microservices, Docker and the GPT-4o API</strong>. <strong>Trans Ghazala</strong> is a logistics platform using <strong>Next.js, Tailwind and shadcn/ui</strong>. I've also built real-time event apps and academic data platforms. 🚀
                  
                  <div className="mt-4 pt-3 border-t border-gray-200">
                    <p className="font-bold mb-2 text-blue-800 text-[11px] tracking-wider uppercase">Quick Links:</p>
                    <div className="flex flex-col space-y-2.5">
                      <a href="https://www.linkedin.com/in/anas-bounaim-37450621a/" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:underline">
                        <span className="mr-2.5 text-lg">🔗</span> LinkedIn Profile
                      </a>
                      <a href={MyCV} download className="flex items-center text-blue-600 hover:underline">
                        <span className="mr-2.5 text-lg">📄</span> Download My CV
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Embedded Project Image */}
                <div className="rounded-2xl rounded-br-none overflow-hidden shadow-md border-4 border-white max-w-[220px]">
                  <img src={icon_about2} alt="Project Preview" className="w-full h-auto" />
                </div>
              </div>
              
              {/* Single Avatar for the whole block */}
              <div className="rounded-full w-8 h-8 ml-2 bg-red-100 flex-shrink-0 border border-red-200 self-end">
                <img src="https://ui-avatars.com/api/?name=Anas+Bounaim&rounded=true&size=32&color=880808&background=FAA0A0" alt="ME" />
              </div>
            </div>

            {/* HIM FINAL */}
            <div className="my-6 flex flex-row items-end text-white animate__animated animate__fadeInLeft">
              <div className="rounded-full w-8 h-8 mr-2 bg-gray-200 flex-shrink-0 border border-gray-100">
                <img src="https://ui-avatars.com/api/?name=K+7&rounded=true&size=32&color=FFFFFF&background=AAAAAA" alt="" />
              </div>
              <div className="bg-blue-600 max-w-[70%] rounded-2xl rounded-bl-none px-4 py-2.5 text-[13px] leading-relaxed shadow-sm">
                Perfect! I’ll definitely connect with you on LinkedIn and download your CV. This portfolio setup is incredible! 😊
              </div>
            </div>
            
            {/* Added extra padding bottom to make sure content doesn't get hidden by the sticky bar */}
            <div className="h-4"></div>
          </div>

          {/* Sticky Input Bar */}
          <div className="sticky bottom-0 w-full bg-gray-50/95 backdrop-blur-sm border-t border-gray-200 p-3 flex items-center z-40 flex-shrink-0">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Type your message here..."
                className="w-full bg-white border border-gray-200 rounded-full px-5 py-2.5 text-[13px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all shadow-inner"
                disabled
              />
            </div>
            <button
              className="ml-3 bg-blue-600 text-white w-9 h-9 flex items-center justify-center rounded-full font-semibold cursor-not-allowed shadow-md hover:bg-blue-700 transition-all opacity-90"
              disabled
            >
              <IoSend size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;

import React, { useState, useEffect } from "react";
import { IoSend } from "react-icons/io5";
import MyCV from "../../assets/AnasBounaimCV.pdf";

import icon_about from "../../assets/web_tec.jpg";
import icon_about1 from "../../assets/web_tec1.jpg";
import icon_about2 from "../../assets/web_tec3.jpg";

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
              <img
                src="https://ui-avatars.com/api/?name=k+7&rounded=true&size=40&color=FFFFFF&background=AAAAAA"
                alt=""
              />
            </div>
            <span className="capitalize leading-4 ml-1">
              Kira7 <br />
              <span className="text-xs flex flex-row items-center text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-1 "></div>
                Active Now
              </span>
            </span>
          </div>

          <div className="mt-12">
            <p className="flex justify-center my-2 font-normal text-gray-400 animate__animated animate__fadeIn">
              - Day in life -
            </p>

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
                Hey Anas! 👋 I was reading your CV and saw your journey from
                support to full-stack development. Can we talk about it? 🧐
              </span>
            </div>

            {/* ME */}
            <div className="my-3 flex flex-row items-end ml-[17.6rem] animate__animated animate__slideInRight animate__delay-1s">
              <span className="bg-gray-200 rounded-t-lg rounded-bl-lg p-2 w-80">
                Sure! 😊 I started with a{" "}
                <strong>Scientific Baccalaureate – Physics &amp; Chemistry</strong>{" "}
                in 2019 at Moulay Teyeb El Alaoui in Salé. Then I completed a{" "}
                <strong>Diploma of Specialized Technician in Software &amp; Web Development</strong>{" "}
                at <strong>ISTA NTIC</strong> from 2020 to 2022, where I built my
                foundations in programming and web technologies. 🎓
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
                Nice! And then you moved to ENSET for higher studies, right? 📚
              </span>
            </div>

            {/* ME */}
            <div className="my-3 flex flex-row items-end ml-[17.6rem] animate__animated animate__slideInRight animate__delay-1s">
              <span className="bg-gray-200 rounded-t-lg rounded-bl-lg p-2 w-80">
                Exactly! I did a{" "}
                <strong>Bachelor&apos;s Degree in Web and Mobile Development</strong>{" "}
                at <strong>ENSET – Hassan II University</strong> from 2022 to
                2023, then continued with a{" "}
                <strong>Master&apos;s Degree in IT Engineering, Big Data &amp; Cloud Computing</strong>{" "}
                from 2023 onwards. I&apos;m focusing on scalable web apps, APIs,
                and cloud-native architectures using technologies like{" "}
                <strong>React, Next.js, Spring Boot, Docker and PostgreSQL</strong>.
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
                Your current role at HCL Tech looks intense. What do you
                actually do there? 🚀
              </span>
            </div>

            {/* ME */}
            <div className="my-3 flex flex-row items-end ml-[17.6rem] animate__animated animate__slideInRight animate__delay-1s">
              <span className="bg-gray-200 rounded-t-lg rounded-bl-lg p-2 w-80">
                Since <strong>October 2024</strong>, I&apos;ve been working as a{" "}
                <strong>Senior IT Service Desk Analyst at HCL Tech</strong>. I
                automate workflows with <strong>Python and JavaScript</strong>,
                debug issues via logs and configs, support{" "}
                <strong>SAP GUI/Fiori</strong>, work with{" "}
                <strong>SCCM, Azure AD, Citrix VDI, ServiceNow</strong>, and
                handle network issues like <strong>VPN, DNS and Zscaler</strong>.
                I also support developers with their tools, environments and API
                access, so I stay very close to real-world dev workflows. 💻
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
                And before HCL, you spent two years at Econocom Maroc, right?
                What did you learn there? 🧐
              </span>
            </div>

            {/* ME */}
            <div className="my-3 flex flex-row items-end ml-[17.6rem] animate__animated animate__slideInRight animate__delay-1s">
              <span className="bg-gray-200 rounded-t-lg rounded-bl-lg p-2 w-80">
                Yes! From <strong>September 2022 to September 2024</strong>, I
                worked at <strong>Econocom Maroc – Service Desk</strong>. I
                delivered <strong>L1/L2 support</strong>, analyzed deployments
                and compliance with <strong>SCCM</strong>, handled{" "}
                <strong>SAP access &amp; workflow issues</strong>, troubleshot
                Windows environments using logs and Event Viewer, and documented
                recurring incidents. It gave me a strong production mindset and
                a customer-focused way of working. 🤝
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
                What about your development side? I saw projects like KaguyaCiné
                and Trans Ghazala on your CV. 🌐
              </span>
            </div>

            {/* ME */}
            <div className="my-3 flex flex-row items-end ml-[17.6rem] animate__animated animate__slideInRight animate__delay-1s">
              <span className="bg-gray-200 rounded-t-lg rounded-bl-lg p-2 w-80">
                On the dev side, I&apos;ve built several real projects. Recently,
                I developed <strong>KaguyaCiné</strong>, a cinema web app with
                seat booking, payments and mood-based film recommendations using{" "}
                <strong>Next.js, Tailwind CSS, Spring Boot microservices, PostgreSQL, Docker, Keycloak and the GPT-4o API</strong>.
                I also worked on <strong>Trans Ghazala</strong>, a transport and
                logistics platform using <strong>Next.js, Tailwind, Radix UI and shadcn/ui</strong>,
                plus apps like an academic data platform (Spring Boot + PostgreSQL)
                and a real-time event management app (React, Node.js, MongoDB). 🚀
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
                With all that experience, what&apos;s your long-term goal? 🌈
              </span>
            </div>

            {/* ME */}
            <div className="my-3 flex flex-row items-end ml-[17.6rem] animate__animated animate__slideInRight animate__delay-1s">
              <span className="bg-gray-200 rounded-t-lg rounded-bl-lg p-2 w-80">
                My goal is to grow as a{" "}
                <strong>full-stack engineer</strong> who can design, ship and
                maintain robust systems end-to-end. I want to keep working on{" "}
                <strong>cloud, big data and AI-driven products</strong> that
                solve real problems, while mentoring teams and bringing the best
                of support culture (reliability, documentation, empathy) into
                software engineering. 🌍
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
                Love it! You&apos;re combining support, engineering, and cloud in
                a really solid way. 🌟
              </span>
            </div>

            {/* ME - LinkedIn and CV Message */}
            <div className="my-3 flex flex-row items-end ml-[17.6rem] animate__animated animate__slideInRight animate__delay-1s">
              <span className="bg-gray-200 rounded-t-lg rounded-bl-lg p-2 w-80">
                Thanks a lot! 😊 If you’d like to connect or know more about me,
                here are some links:
                <ul className="mt-2">
                  <li>
                    🔗{" "}
                    <a
                      href="https://www.linkedin.com/in/anas-bounaim-37450621a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      My LinkedIn Profile
                    </a>
                  </li>
                  <li>
                    📄{" "}
                    <a href={MyCV} download className="text-blue-500 underline">
                      Download My CV
                    </a>
                  </li>
                </ul>
              </span>
            </div>

            <div className=" my-3 flex flex-row items-end ml-[21.8rem]  animate__animated animate__slideInRight animate__delay-1s ">
              <div className="flex flex-col ">
                <img
                  className="bg-gray-300 rounded-t-lg rounded-bl-lg p-1 my-1 w-64"
                  src={icon_about2}
                  alt=""
                />
              </div>
              <div className="rounded-full w-10 h-10 ml-1 bg-red-300">
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
                Perfect! I’ll definitely connect with you on LinkedIn and
                download your CV. Thanks for sharing! 😊
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
                <IoSend size={19} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;

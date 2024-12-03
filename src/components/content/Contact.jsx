import React, { useState, useEffect, useRef } from "react";
import icon_contact from "../../assets/contact-icon.png";
import emailjs from "@emailjs/browser";
import { FaPaperPlane, FaRocket } from "react-icons/fa"; // Import React Icons

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingContent, setIsLoadingContent] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    emailjs
      .sendForm(
        "service_itp12ze",
        "template_zo4sudd",
        form.current,
        "jk7UKt7e9WoCEV947"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          clearInputs(); // Clear inputs after successful submission
        },
        (error) => {
          console.error("Error sending email:", error.text);
        }
      )
      .finally(() => {
        setIsLoading(false); // Stop loading
      });
  };

  const clearInputs = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoadingContent(false);
    }, 1000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <>
      {isLoadingContent ? (
        <div className="flex items-center justify-center h-[520px]">
          <div
            className="inline-block h-14 w-14 animate-spin rounded-full border-[6px] border-solid border-blue-600 border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="animate__animated animate__fadeIn mt-[3.4rem]">
          <div className="flex justify-center items-center">
            <img src={icon_contact} className="w-12 h-12 mr-4" alt="Contact Icon" />
            <h1 className="text-5xl">Contact</h1>
          </div>

          <div className="flex flex-col justify-center items-center py-5">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col justify-center items-center"
            >
              <input
                type="text"
                name="user_name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                autoComplete="off"
                className="p-2 m-2 border border-gray-300 rounded-md w-80"
                placeholder="Full Name"
                aria-label="Full Name"
                required
              />

              <input
                type="email"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
                className="p-2 m-2 border border-gray-300 rounded-md w-80"
                placeholder="Email"
                aria-label="Email"
                required
              />

              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                autoComplete="off"
                cols="20"
                rows="8"
                className="p-2 m-2 border border-gray-300 rounded-md w-80"
                placeholder="Message"
                aria-label="Message"
                required
              ></textarea>

              <button
                type="submit"
                disabled={isLoading}
                className={`p-2 w-80 text-white rounded-md font-semibold text-lg flex items-center justify-center gap-2 ${
                  isLoading
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-red-500 hover:bg-red-600 cursor-pointer"
                }`}
              >
                {isLoading ? <FaRocket /> : <FaPaperPlane />}
                {isLoading ? "Sending" : "Send"}
              </button>
            </form>
          </div>

          <div>
            <p className="flex justify-center items-center font-serif italic font-extralight">
              You can also find me on the following social networks
            </p>
            <ul className="flex justify-center items-center gap-8 font text-white">
              <li className="bg-gradient-to-r from-blue-500 to-blue-600 h-7 w-28 hover:animate-pulse cursor-pointer text-center flex justify-center items-center my-3 rounded-full">
                <a href="https://www.linkedin.com/in/anas-bounaim-37450621a/" target="_blank">LinkedIn</a>
              </li>
              <li className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 h-7 w-28 hover:animate-pulse cursor-pointer text-center flex justify-center items-center my-3 rounded-full">
                <a href="https://www.instagram.com/anasbounaiim/" target="_blank">Instagram</a>
              </li>
              <li className="bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 h-7 w-28 hover:animate-pulse cursor-pointer text-center flex justify-center items-center my-3 rounded-full">
                <a href="https://github.com/anasbounaiim" target="_blank">GitHub</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;

import React, { useState, useEffect, useRef } from "react";
import icon_contact from "../../assets/contact-icon.png";
import emailjs from "@emailjs/browser";

import { db } from "../../Firebase";
import { addDoc, collection } from "firebase/firestore";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [isLoadingContent, setIsLoadingContent] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
  
    emailjs
      .sendForm(
        "service_itp12ze",
        "template_zo4sudd",
        form.current,
        "b1bUaM6-3UvY3Xujv"
      )
      .then(
        (result) => {
          console.log(result.text);
          clearInputs(); // Clear inputs on successful submission
        },
        (error) => {
          console.log(error.text);
        }
       
      );
  };

  const clearInputs = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // firebase
  //   try {
  //     await addDoc(collection(db, "contact"), {
  //       name,
  //       email,
  //       message,
  //     });

  //     // Clear the form after submitting
  //     setName("");
  //     setEmail("");
  //     setMessage("");
  //   } catch (error) {
  //     console.error("Error adding document:", error);
  //   }
  // };
  // // ===============

  useEffect(() => {
    // Simulate loading by setting isLoading to false after a delay (e.g., 2 seconds)
    const loadingTimeout = setTimeout(() => {
      setIsLoadingContent(false);
    }, 1000);

    return () => clearTimeout(loadingTimeout); // Clean up the timeout if the component unmounts before loading completes
  }, []);

  const handleSendButtonClick = () => {
    // Simulating loading for 2 seconds (you can replace this with your actual API call)
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <>
      {isLoadingContent ? (
        <div className="flex items-center justify-center h-[520px]">
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
        <div className="animate__animated animate__fadeIn mt-[3.4rem]">
          <div className="flex justify-center items-center ">
            <img src={icon_contact} className="w-12 h-12 mr-4" alt="" />
            <h1 className="text-5xl "> Contact</h1>
          </div>

          <div className="flex flex-col justify-center items-center py-5">
            {/* <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center"
            >
              <input
                type="text"
                className="p-2 m-2 border border-gray-300 rounded-md w-80"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                name=""
                id=""
                className="p-2 m-2 border border-gray-300 rounded-md w-80"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                name=""
                id=""
                cols="20"
                rows="8"
                className="p-2 m-2 border border-gray-300 rounded-md w-80"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>

              <input
                type="submit"
                value={isLoading ? "Sending..." : "Send"}
                onClick={handleSendButtonClick}
                className="p-2 bg-red-500 hover:bg-red-600 cursor-pointer text-white rounded-md font-semibold text-lg w-80"
              />
            </form> */}

            {/* Form using email js */}

            <form ref={form} onSubmit={sendEmail}  className="flex flex-col justify-center items-center">
        
        <input type="text" name="user_name"
                onChange={(e) => setName(e.target.value)}
        value={name}
         autocomplete="off"
        className="p-2 m-2 border border-gray-300 rounded-md w-80"
        placeholder="Fullname" required />
        
        <input type="email" name="user_email"
        value={email}
         autocomplete="off"
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 m-2 border border-gray-300 rounded-md w-80"
        placeholder="Email" required/>
        
        <textarea name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
         cols="20"
          autocomplete="off"
         rows="8"
         className="p-2 m-2 border border-gray-300 rounded-md w-80"
         placeholder="Message" required/>

        <input type="submit" 
        value={isLoading ? "Sending..." : "Send"}
        onClick={handleSendButtonClick}
        className="p-2 bg-red-500 hover:bg-red-600 cursor-pointer text-white rounded-md font-semibold text-lg w-80"/>

      </form>
          </div>
          <div>
            <p className="flex justify-center items-center font-serif italic font-extralight">You can also find me on the following social networks</p>
            <ul className="flex justify-center items-center gap-8 font text-white ">
              <li className="bg-gradient-to-r from-blue-500 to-blue-600 h-7 w-28 hover:animate-pulse cursor-pointer text-center flex justify-center items-center  my-3 rounded-full">Linkedin</li>
              <li className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 h-7 w-28 hover:animate-pulse cursor-pointer text-center flex justify-center items-center  my-3 rounded-full">Intagram</li>
              <li className="bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 h-7 w-28  hover:animate-pulse cursor-pointer text-center flex justify-center items-center my-3 rounded-full">Github</li>
            </ul>
          </div>
        </div>
      )}

   
    </>
  );
};

export default Contact;

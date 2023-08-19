import React, { useRef, useState, useEffect } from "react";
import megadose from "../assets/MEGADOSE.mp3";
import ouf from "../assets/ouf.mp3";

import Playlist from "./Playlist";


import audio_anim from "../assets/anime3.jpg";
import audio_anim1 from "../assets/anime1.jpg";
import audio_anim2 from "../assets/anime2.jpg";
import audio_anim4 from "../assets/anime4.jpg";

import play_btn from "../assets/play_btn.png";
import pause_btn from "../assets/pause_btn.png";
import next_btn from "../assets/next_btn.png";
import back_btn from "../assets/back_btn.png";

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [play, setPlay] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const audioTracks = [
    { title: "Test", src: "", cover: audio_anim1 },
    { title: "Pweepa - splif de ouf", src: ouf, cover: audio_anim1 },
    { title: "Pweepa - Megadose", src: megadose, cover: audio_anim },
    { title: "Pweepa - splif de ouf (1)", src: ouf, cover: audio_anim2 },
    { title: "Test 2", src: "", cover: audio_anim4 },
    { title: "Test 2", src: "", cover: audio_anim },
    { title: "Test 4", src: "", cover: audio_anim2 },
  ];

  const handleNextTrack = () => {
    const nextTrackIndex = (currentTrackIndex + 1) % audioTracks.length;
    setCurrentTrackIndex(nextTrackIndex);
    setProgress(0);
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setPlay(true);
  };

  const handleTimeUpdate = () => {
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    const calculatedProgress = (currentTime / duration) * 100;
    setProgress(calculatedProgress);
    setCurrentTime(currentTime);
  };

  const handlePreviousTrack = () => {
    const prevTrackIndex =
      (currentTrackIndex - 1 + audioTracks.length) % audioTracks.length;
    setCurrentTrackIndex(prevTrackIndex);
    setProgress(0);
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setPlay(true);
  };

  const handlePlay = () => {
    audioRef.current.play();
    setPlay(true);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setPlay(false);
  };

  const handleTrackChange = (index) => {
    setCurrentTrackIndex(index);
    setProgress(0);
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setPlay(false); // Stop playing when changing tracks
  };

  useEffect(() => {
    audioRef.current.load();
    const playPromise = audioRef.current.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Autoplay started successfully
          setPlay(true);
        })
        .catch(() => {
          // Autoplay failed, usually due to browser restrictions
          setPlay(false);
        });
    }

    audioRef.current.addEventListener("loadedmetadata", () => {
      setDuration(audioRef.current.duration);
    });

    return () => {
      audioRef.current.removeEventListener("loadedmetadata", () => {
        setDuration(audioRef.current.duration);
      });
    };
  }, [currentTrackIndex]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (

    <div className="flex  animate__animated animate__fadeInRight rounded-lg max-w-fit fixed right-1 h-[20rem] mr-6">
       <Playlist
          audioTracks={audioTracks}
          currentTrackIndex={currentTrackIndex}
          handleTrackChange={handleTrackChange}
        />


        
    <div className="">
      <div className="">
        <audio
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
        >
          <source src={audioTracks[currentTrackIndex].src} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>

      {audioTracks.map((track, index) => (
        <div key={index} className="flex w-full">

          {index === currentTrackIndex ? (
            <div>
              <div className="flex justify-center bg-slate-200 overflow-hidden w-56 h-48 opacity-80 rounded-t-md">
                <img
                  src={track.cover}
                  className="w-64  animate__fadeIn  animate__animated animate__faster"
                  alt=""
                />
              </div>
              <span className="absolute top-0 text-lg ml-2 mt-2 text-white font-bold drop-shadow-2xl">
                {track.title}
              </span>
              <div className="absolute top-40 text-ms ml-2 text-white font-bold drop-shadow-2xl">
                <span>{formatTime(currentTime)}</span> /{" "}
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          ) : null}

        
          
        </div>
      ))} 

      <div className="w-full h-2 bg-gray-300 ">
        <div
          className="h-full bg-green-500 border-r-8 border-white"
          style={{ width: `${progress}%` }}
        >
          {" "}
        </div>
      </div>
      <div className="w-full h-[15%] flex justify-center items-center bg-blue-600 rounded-b-lg">
        <button className="" onClick={handlePreviousTrack}>
          <img className="w-8 h-8" src={back_btn} alt="" />
        </button>
        {!play ? (
          <button
            className="text-4xl mx-1 text-gray-50 font-bold"
            onClick={handlePlay}
          >
            <img className="w-8 h-8" src={play_btn} alt="" />
          </button>
        ) : (
          <button
            className="text-xl mx-1 text-gray-50 font-bold"
            onClick={handlePause}
          >
            <img className="w-8 h-8" src={pause_btn} alt="" />
          </button>
        )}
        <button className="" onClick={handleNextTrack}>
          <img className="w-8 h-8" src={next_btn} alt="" />
        </button>
      </div>
    </div>
    </div> 
  );
};

export default AudioPlayer;

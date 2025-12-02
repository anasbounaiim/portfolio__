import React, { useRef, useState, useEffect } from "react";

// 🎵 Audio files
import megadose from "../../assets/MEGADOSE.mp3";
import ouf from "../../assets/ouf.mp3";
import Sucre_SaleV from "../../assets/SucreSaleV.mp3";
import VetoV from "../../assets/Vetov.mp3";
import KillV from "../../assets/KILLv.mp3";
import MorV from "../../assets/Lmorphiniya34V.mp3";
import tictacV from "../../assets/TicTacv.mp3";

// 📄 Playlist component
import Playlist from "./Playlist";

// 🎨 Images for songs
import audio_anim from "../../assets/anime3.jpg";
import audio_anim1 from "../../assets/anime1.jpg";
import audio_anim2 from "../../assets/anime2.jpg";
import morphoto from "../../assets/m36.png";
import Sucre_Sale from "../../assets/Sucre_Sale.png";
import Veto from "../../assets/Veto.png";
import Kill from "../../assets/KILL.png";
import TicTac from "../../assets/tictac.png";

// 🎛️ UI buttons
import play_btn from "../../assets/play_btn.png";
import pause_btn from "../../assets/pause_btn.png";
import next_btn from "../../assets/next_btn.png";
import back_btn from "../../assets/back_btn.png";
import mute_btn from "../../assets/mute_btn.png";
import unmute_btn from "../../assets/unmute_btn.png";


const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [play, setPlay] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false); // Mute state

  const audioTracks = [
    { title: "Kill", src: KillV, cover: Kill },
    { title: "Tic Tac", src: tictacV, cover: TicTac },
    { title: "Veto", src: VetoV, cover: Veto },
    { title: "Sucré Salé", src: Sucre_SaleV, cover: Sucre_Sale },
    { title: "L'morphiniya 34", src: MorV, cover: morphoto },
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

  const handleMute = () => {
    setIsMuted(!isMuted);
    audioRef.current.muted = !isMuted; // Toggle mute state
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
    <div className="flex animate__animated animate__fadeInRight rounded-lg max-w-fit fixed right-1 h-[20rem] mr-6">
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
            onEnded={() => setPlay(false)}
          >
            <source src={audioTracks[currentTrackIndex].src} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>

          
        </div>

        {audioTracks.map((track, index) => (
          <div key={index} className="flex w-full">
            {index === currentTrackIndex ? (
              <div>

                 {/* Mute Button */}
          <div className="mt-2 fixed z-50 right-1 top-[-1]">
            <button onClick={handleMute}>
              <img
                className="w-6 h-6"
                src={isMuted ? mute_btn : unmute_btn} // Toggle between mute and unmute images
                alt="mute/unmute"
              />
            </button>
          </div>
                <div className="flex justify-center bg-slate-200 overflow-hidden w-44 h-36 opacity-80 rounded-t-md">
                  <img
                    src={track.cover}
                    className="w-64 animate__fadeIn animate__animated animate__faster"
                    alt=""
                  />
                </div>
                <span className="absolute top-0 text-base ml-2 mt-2 text-white font-bold drop-shadow-2xl">
                  {track.title}
                </span>

                
                <div className="absolute top-[7.5rem] text-sm ml-2 text-white font-bold drop-shadow-2xl">
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
          ></div>
        </div>

        <div className="w-full h-[16%] flex flex-col justify-center items-center bg-blue-600 rounded-b-lg">
          <div className="flex justify-center items-center space-x-1">
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
    </div>
  );
};

export default AudioPlayer;

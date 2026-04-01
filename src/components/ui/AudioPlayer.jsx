import React, { useRef, useState, useEffect } from "react";

// 🎵 Audio files
import KillV from "../../assets/KILLv.mp3";
import tictacV from "../../assets/TicTacv.mp3";
import VetoV from "../../assets/Vetov.mp3";
import Sucre_SaleV from "../../assets/SucreSaleV.mp3";
import MorV from "../../assets/Lmorphiniya34V.mp3";

// 📄 Playlist component
import Playlist from "./Playlist";

// 🎨 Icons & Assets
import morphoto from "../../assets/m36.png";
import Sucre_Sale from "../../assets/Sucre_Sale.png";
import Veto from "../../assets/Veto.png";
import Kill from "../../assets/KILL.png";
import TicTac from "../../assets/tictac.png";

import {
  IoPlay,
  IoPause,
  IoPlayBack,
  IoPlayForward,
  IoVolumeHigh,
  IoVolumeMute,
  IoList,
} from "react-icons/io5";

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [play, setPlay] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);

  const audioTracks = [
    { title: "Kill", artist: "Engulfed", src: KillV, cover: Kill },
    { title: "Tic Tac", artist: "Engulfed", src: tictacV, cover: TicTac },
    { title: "Veto", artist: "Engulfed", src: VetoV, cover: Veto },
    { title: "Sucré Salé", artist: "Engulfed", src: Sucre_SaleV, cover: Sucre_Sale },
    { title: "L'morphiniya 34", artist: "Engulfed", src: MorV, cover: morphoto },
  ];

  const handleNextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % audioTracks.length);
    setPlay(true);
  };

  const handlePreviousTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + audioTracks.length) % audioTracks.length);
    setPlay(true);
  };

  const handleTrackChange = (index) => {
    setCurrentTrackIndex(index);
    setPlay(true);
    setShowPlaylist(false);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;
    const current = audio.currentTime;
    const dur = audio.duration || 0;
    setProgress((current / (dur || 1)) * 100);
  };

  const handleMute = () => {
    setIsMuted((prev) => {
      const next = !prev;
      if (audioRef.current) audioRef.current.muted = next;
      return next;
    });
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (play) {
      audio.play().catch(() => setPlay(false));
    } else {
      audio.pause();
    }
  }, [play, currentTrackIndex]);

  return (
    <div className="fixed right-6 top-6 z-[]">
      {/* IMPORTANT: this parent must stay overflow-visible */}
      <div className="relative overflow-visible">
        {/* Playlist outside on the left */}
        {showPlaylist && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 z-[6000]">
            <Playlist
              audioTracks={audioTracks}
              currentTrackIndex={currentTrackIndex}
              handleTrackChange={handleTrackChange}
              showPlaylist={showPlaylist}
            />
          </div>
        )}

        {/* Player */}
        <div className="relative w-48 h-48 rounded-[1rem] overflow-hidden shadow-2xl border border-white/10 group-hover/player:scale-[1.02] transition-transform duration-500">
          <audio
            ref={audioRef}
            src={audioTracks[currentTrackIndex].src}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleNextTrack}
          />

          <div className="absolute inset-0 bg-black">
            <img
              src={audioTracks[currentTrackIndex].cover}
              className="w-full h-full object-cover transition-transform duration-700"
              alt="cover"
            />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
          </div>

          <div className="absolute top-6 left-6 right-6 z-10 flex flex-col pointer-events-none drop-shadow-lg">
            <span className="text-white text-[12px] font-bold tracking-tight truncate">
              {audioTracks[currentTrackIndex].title}
            </span>
            <span className="text-white/70 text-[10px] font-medium truncate">
              {audioTracks[currentTrackIndex].artist}
            </span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center space-x-6 z-10">
            <button
              className="text-white/90 hover:text-white hover:scale-110 transition-all drop-shadow-xl"
              onClick={handlePreviousTrack}
              title="Previous"
            >
              <IoPlayBack size={32} />
            </button>

            <button
              className="text-white hover:scale-110 active:scale-95 transition-all drop-shadow-2xl"
              onClick={() => setPlay(!play)}
              title={play ? "Pause" : "Play"}
            >
              {play ? <IoPause size={64} /> : <IoPlay size={64} className="ml-1" />}
            </button>

            <button
              className="text-white/90 hover:text-white hover:scale-110 transition-all drop-shadow-xl"
              onClick={handleNextTrack}
              title="Next"
            >
              <IoPlayForward size={32} />
            </button>
          </div>

          <div className="absolute bottom-6 left-6 right-6 z-10 flex justify-between items-center opacity-80">
            <button onClick={handleMute} className="text-white">
              {isMuted ? <IoVolumeMute size={16} /> : <IoVolumeHigh size={16} />}
            </button>

            <button
              onClick={() => setShowPlaylist((prev) => !prev)}
              className="text-white"
            >
              <IoList size={16} />
            </button>
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 h-2 bg-white/20 cursor-pointer"
            onClick={(e) => {
              const dur = audioRef.current?.duration;
              if (!dur || isNaN(dur)) return;
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const newTime = (x / rect.width) * dur;
              audioRef.current.currentTime = newTime;
              setProgress((x / rect.width) * 100);
            }}
          >
            <div
              className="h-full bg-white transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
import { useEffect, useRef, useState } from "react";
import {
  FaBackward,
  FaExpand,
  FaForward,
  FaPause,
  FaPlay,
  FaStepBackward,
  FaStepForward,
  FaStop,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";

const videos = [
  { title: "IMG_2943.mp4", src: "/videos/IMG_2943.mp4" },
  { title: "IMG_2944.mp4", src: "/videos/IMG_2944.mp4" },
];

const formatTime = (seconds) => {
  if (!Number.isFinite(seconds)) return "00:00";
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  return hours
    ? `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`
    : `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};

const Videos = () => {
  const [selected, setSelected] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.25);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.volume = volume;
  }, [selected, volume]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play();
    else video.pause();
  };

  const stop = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  const seekBy = (seconds) => {
    const video = videoRef.current;
    if (video) video.currentTime = Math.max(0, Math.min(video.duration || 0, video.currentTime + seconds));
  };

  const selectVideo = (index, autoplay = false) => {
    videoRef.current?.pause();
    setSelected(index);
    setCurrentTime(0);
    setIsPlaying(false);
    if (autoplay) setTimeout(() => videoRef.current?.play(), 0);
  };

  const changeVolume = (value) => {
    const nextVolume = Number(value);
    setVolume(nextVolume);
    setIsMuted(false);
    if (videoRef.current) {
      videoRef.current.volume = nextVolume;
      videoRef.current.muted = false;
    }
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (videoRef.current) videoRef.current.muted = nextMuted;
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) playerRef.current?.requestFullscreen();
    else document.exitFullscreen();
  };

  const playNext = () => selectVideo((selected + 1) % videos.length, true);
  const playPrevious = () => selectVideo((selected - 1 + videos.length) % videos.length, true);

  return (
    <div
      ref={playerRef}
      className="flex h-full min-h-0 flex-col bg-[#111] font-sans text-[12px] text-white"
      onPointerDown={(event) => event.stopPropagation()}
    >
      <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-black">
        <video
          key={videos[selected].src}
          ref={videoRef}
          className="h-full w-full object-contain"
          playsInline
          preload="metadata"
          onClick={togglePlay}
          onDoubleClick={toggleFullscreen}
          onLoadedMetadata={(event) => {
            event.currentTarget.volume = volume;
            setDuration(event.currentTarget.duration);
          }}
          onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={playNext}
        >
          <source src={videos[selected].src} type="video/mp4" />
        </video>
        {!isPlaying && currentTime === 0 && (
          <button
            type="button"
            onClick={togglePlay}
            className="absolute rounded-full border border-white/30 bg-black/50 p-5 text-3xl text-white/90 shadow-xl hover:bg-black/70"
            title="Play"
          >
            <FaPlay className="translate-x-0.5" />
          </button>
        )}
      </div>

      <div className="shrink-0 border-t border-[#c9c9c9] bg-white text-[#222]">
        <div className="flex min-h-8 items-center border-b border-[#d5d5d5] px-1.5 sm:h-6 sm:min-h-0">
          <span className="min-w-0 flex-1 truncate text-[#333]">{videos[selected].title}</span>
          <input
            aria-label="Video progress"
            type="range"
            min="0"
            max={duration || 0}
            step="0.01"
            value={Math.min(currentTime, duration || 0)}
            onChange={(event) => {
              const time = Number(event.target.value);
              if (videoRef.current) videoRef.current.currentTime = time;
              setCurrentTime(time);
            }}
            className="mpc-range ml-2 w-[45%] sm:ml-3 sm:w-[58%]"
          />
        </div>

        <div className="flex min-h-11 flex-wrap items-center justify-center gap-1 px-2 py-2 text-[#333] sm:h-11 sm:flex-nowrap sm:justify-start sm:gap-1.5 sm:py-0">
          <button type="button" onClick={togglePlay} className="mpc-button text-base" title={isPlaying ? "Pause" : "Play"}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button type="button" onClick={stop} className="mpc-control" title="Stop"><FaStop /></button>
          <button type="button" onClick={playPrevious} className="mpc-control" title="Previous video"><FaStepBackward /></button>
          <button type="button" onClick={() => seekBy(-10)} className="mpc-control" title="Back 10 seconds"><FaBackward /></button>
          <button type="button" onClick={() => seekBy(10)} className="mpc-control" title="Forward 10 seconds"><FaForward /></button>
          <button type="button" onClick={playNext} className="mpc-control" title="Next video"><FaStepForward /></button>

          <select
            value={selected}
            onChange={(event) => selectVideo(Number(event.target.value))}
            className="order-last mt-1 w-full bg-transparent text-center text-[11px] text-[#222] outline-none sm:order-none sm:ml-2 sm:mt-0 sm:max-w-36 sm:text-left"
            aria-label="Choose video"
          >
            {videos.map((video, index) => <option key={video.src} value={index} className="text-black">{video.title}</option>)}
          </select>

          <span className="hidden text-[10px] text-[#555] sm:ml-auto sm:inline">AUD</span>
          <button type="button" onClick={toggleFullscreen} className="mpc-control" title="Fullscreen"><FaExpand /></button>
          <button type="button" onClick={toggleMute} className="mpc-control text-base" title={isMuted ? "Unmute" : "Mute"}>
            {isMuted || volume === 0 ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
          <input
            aria-label="Volume"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={(event) => changeVolume(event.target.value)}
            className="mpc-volume w-14 sm:w-20"
          />
        </div>

        <div className="flex h-6 items-center border-t border-[#d5d5d5] bg-[#f3f3f3] px-2 text-[#222]">
          <span>{isPlaying ? "Playing" : currentTime > 0 ? "Paused" : "Stopped"}</span>
          <span className="ml-auto font-mono">{formatTime(currentTime)} / {formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
};

export default Videos;

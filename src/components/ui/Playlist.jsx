import React from "react";

const Playlist = ({
  audioTracks,
  currentTrackIndex,
  handleTrackChange,
  showPlaylist,
}) => {
  if (!showPlaylist) return null;

  return (
    <div className="w-[200px] rounded-[1.25rem] overflow-hidden border border-white/10 bg-white/10 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.45)] animate__animated animate__fadeInLeft animate__faster">

      {/* Header (small) */}
      <div className="px-3 py-2 border-b border-white/10 bg-white/5">
        <p className="text-[9px] font-semibold tracking-[0.2em] uppercase text-white/80">
          Playlist
        </p>
      </div>

      {/* Tracks */}
      <div className="max-h-[220px] overflow-y-auto p-1.5 space-y-1 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        {audioTracks.map((track, index) => {
          const isActive = index === currentTrackIndex;

          return (
            <button
              key={index}
              onClick={() => handleTrackChange(index)}
              className={`w-full text-left rounded-xl px-2 py-2 flex items-center gap-2 transition-all duration-200 ${isActive
                  ? "bg-[#316ac5]/90 text-white"
                  : "bg-white/[0.04] text-white/80 hover:bg-white/[0.08]"
                }`}
            >
              {/* Small cover */}
              <img
                src={track.cover}
                alt={track.title}
                className="w-8 h-8 rounded-lg object-cover border border-white/10 shrink-0"
              />

              {/* Text */}
              <div className="min-w-0 flex-1">
                <p className="truncate text-[10px] leading-tight font-medium">
                  {track.title}
                </p>
                <p className="truncate text-[9px] text-white/50">
                  {track.artist}
                </p>
              </div>

              {/* Index */}
              <span className="text-[9px] text-white/40">
                {index + 1}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Playlist;
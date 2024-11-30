import React, { useState } from "react";
import playlist_icon from "../assets/playlist_icon.png";

const Playlist = ({ audioTracks, currentTrackIndex, handleTrackChange }) => {
  const [showPlaylist, setShowPlaylist] = useState(false);

  return (
    <div className="flex flex-row absolute right-44 h-[17rem]">
      {/* Playlist */}
      {showPlaylist && (
        <div className=" w-44 h-[10rem] overflow-y-scroll rounded-md animate__animated  animate__fadeIn animate__faster">
          {audioTracks.map((track, index) => (
            <div
              key={index}
              className="bg-gray-100 text-gray-500  font-semibold "
            >
              <button
                className={`w-full ${
                  index === currentTrackIndex ? "bg-gray-300" : ""
                } text-left px-5 border-b-[1px] h-8 border-gray-400  flex items-center`}
                onClick={() => handleTrackChange(index)}
              >
                <span className="w-[100%] h-7 flex items-center overflow-hidden text-xs">
                  <span className="text-xs">{index+1} - </span>  {track.title} 
                </span>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Toggle Button */}
      <div>
        <div
          onClick={() => setShowPlaylist(!showPlaylist)}
          className=" text-white opacity-60 w-7 h-7  flex items-center justify-center  cursor-pointer mt-[4rem] absolute z-50"
        >
          <img src={playlist_icon} className="w-7 h-7" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Playlist;

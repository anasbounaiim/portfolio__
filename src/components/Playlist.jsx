import React, { useState } from "react";
import playlist_icon from "../assets/playlist_icon.png";

const Playlist = ({ audioTracks, currentTrackIndex, handleTrackChange }) => {
  const [showPlaylist, setShowPlaylist] = useState(false);

  return (
    <div className="flex flex-row absolute right-56 h-[17rem]">
      {/* Playlist */}
      {showPlaylist && (
        <div className=" w-52 h-[12rem] overflow-y-scroll rounded-md animate__animated  animate__fadeIn animate__faster">
          {audioTracks.map((track, index) => (
            <div
              key={index}
              className="bg-gray-100 text-gray-500  font-semibold "
            >
              <button
                className={`w-full ${
                  index === currentTrackIndex ? "bg-gray-300" : ""
                } text-left px-5 border-b-[1px] h-10 border-gray-400  flex items-center`}
                onClick={() => handleTrackChange(index)}
              >
                <span className="w-[100%] h-7 overflow-hidden text-sm">
                  <span className="text-sm">{index+1} - </span>  {track.title} 
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
          className=" text-white opacity-60 w-7  flex items-center justify-center  cursor-pointer mt-[100px] absolute z-50"
        >
          <img src={playlist_icon} className="w-10 h-10" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Playlist;

import { useState, useEffect } from "react";
import cloud from "../assets/wheather_icons/cloud.png";
import rain from "../assets/wheather_icons/rain.png";
import mist from "../assets/wheather_icons/mist.png";
import drizzle from "../assets/wheather_icons/drizzle.png";
import sun from "../assets/wheather_icons/sun.png";
import man from "../assets/wheather_icons/man.png";

import { FaMagnifyingGlass } from "react-icons/fa6";

const Whether = () => {
  const api = {
    key: "14b5d8f9ea0dd366e7702251c11d6d9d",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [weatherIcon, setWeatherIcon] = useState("");
  const [bgColor, setBgColor] = useState("bg-gradient-to-t from-sky-400 to-sky-600");

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&appid=${api.key}&units=metric`)
      .then((res) => res.json())
      .then((result) => {
        if (result.weather[0].main === "Clouds") {
          setWeatherIcon(cloud);
          setBgColor("bg-gradient-to-t from-gray-400 to-gray-600");
        } else if (result.weather[0].main === "Clear") {
          setWeatherIcon(sun);
          setBgColor("bg-gradient-to-t from-yellow-400 to-yellow-500");
        } else if (result.weather[0].main === "Rain") {
          setWeatherIcon(rain);
          setBgColor("bg-gradient-to-t from-blue-400 to-blue-600");
        } else if (result.weather[0].main === "Drizzle") {
          setWeatherIcon(drizzle);
          setBgColor("bg-gradient-to-t from-teal-300 to-teal-500");
        } else if (result.weather[0].main === "Mist") {
          setWeatherIcon(mist);
          setBgColor("bg-gradient-to-t from-gray-200 to-gray-400");
        } else {
          setWeatherIcon(man);
          setBgColor("bg-gradient-to-t from-red-400 to-red-600");
        }

        setWeather(result);
      });
  };

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div className={`absolute top-[13rem] flex flex-col items-center right-1 w-44 h-44 ${bgColor} mr-6 mt-6 rounded-lg animate__animated animate__fadeInRight`}>
      <div className="text-white w-[100%] h-[74%]">
        {typeof weather.main !== "undefined" ? (
          <div className="my-2 mt-3 text-xs font-semibold flex flex-col items-center animate__animated animate__fadeIn">
            <img className="w-12 h-12" src={weatherIcon} alt="" />
            <p>
              {weather.name} ({weather.sys.country})
            </p>
            <p className="text-base">{weather.main.temp}°C</p>
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center w-[100%] h-[100%]">
            <img className="w-11 h-11" src={man} alt="" />
            <h1 className="text-base font-bold">Wheather App</h1>
            <h1 className="text-xs font-bold">Search for a city</h1>
          </div>
        )}
      </div>
      <div className="flex flex-row justify-center mt-3">
        <input
          className="text-black w-32 text-xs px-2 py-0 rounded-l-md capitalize"
          type="text"
          placeholder="Enter city/town..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchPressed} className="bg-gray-200 p-1 py-1 px-2 rounded-r-lg">
          <FaMagnifyingGlass className="text-gray-500 " />
        </button>
      </div>
    </div>
  );
};

export default Whether;

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

  const [weather_icon, setWeatherIcon] = useState("");

  /*
    Search button is pressed. Make a fetch call to the Open Weather Map API.
  */
  const searchPressed = () => {
 

    fetch(`${api.base}weather?q=${search}&appid=${api.key}&units=metric`)
      .then((res) => res.json())
      .then((result) => {
        if (result.weather[0].main === "Clouds") {
          setWeatherIcon(cloud);
        } else if (result.weather[0].main === "Clear") {
          setWeatherIcon(sun);
        } else if (result.weather[0].main === "Rain") {
          setWeatherIcon(rain);
        } else if (result.weather[0].main === "Drizzle") {
          setWeatherIcon(drizzle);
        } else if (result.weather[0].main === "Mist") {
          setWeatherIcon(mist);
        } else {
          setWeatherIcon(man);
        }

        setWeather(result);
      });
  };


  useEffect(() => {
    // Simulate loading by setting isLoading to false after a delay (e.g., 1 seconds)
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(loadingTimeout); // Clean up the timeout if the component unmounts before loading completes
  }, []);
  return (
    <div className="absolute top-[15rem] flex flex-col items-center right-1 w-48 h-48 bg-gradient-to-t from-sky-500 to-sky-500  mr-6 mt-6 rounded-lg animate__animated animate__fadeInRight">
      

      {/* If weather is not undefined display results from API */}
      <div className="text-white w-[100%] h-[74%]">
      {typeof weather.main !== "undefined" ? (
      
          <div className="my-2 mt-3 text-sm font-semibold flex flex-col items-center animate__animated animate__fadeIn">
            <img className="w-12 h-12" src={weather_icon} alt="" />

            {/* Location */}
            <p>
              {weather.name} ({weather.sys.country})
            </p>

            {/* Temperature Celsius */}
            <p className="text-lg">{weather.main.temp}°C</p>

            {/* Condition (Sunny) */}
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
      
      ) : (
        <div className="flex flex-col items-center justify-center w-[100%] h-[100%]">
          <img className="w-11 h-11" src={man} alt="" />
          <h1 className="text-lg font-bold">Wheather App</h1>
          <h1 className="text-sm font-bold">Search for a city</h1>
        </div>
      )}
        </div>

      {/* Search Box - Input + Button  */}
      <div className="flex flex-row justify-center mt-4">
        <input
          className="text-black w-36 text-sm px-2 py-0 rounded-l-md capitalize"
          type="text"
          placeholder="Enter city/town..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchPressed} className="bg-gray-200 p-1 py-1 px-2 rounded-r-lg">
        <FaMagnifyingGlass className="text-gray-500 "/>
        </button>
      </div>

      {/* test section */}

      {/* ============ */}
    </div>
  );
};
export default Whether;

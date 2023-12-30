import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext.jsx";
import '../styles/Header.css'

function Header() {
  const { weatherData } = useContext(WeatherContext);
  if (weatherData) {
    return (
      <div className="weather">
        <h1 className="location">{weatherData.location.name}</h1>
        <div className="container">
          <img
            className="image"
            src={weatherData.current.condition.icon}
          ></img>
          <div className="temp">{weatherData.current.temp_c}&deg;</div>
        </div>
        <h1 className="text">{weatherData.current.condition.text}</h1>
      </div>
    );
  } else null;
}

export default Header;

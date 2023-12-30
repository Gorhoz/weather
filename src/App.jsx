import { useState } from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Filter from "./components/Filter";
import Universities from "./components/Universities";
import NotFound from "./components/NotFound";
import Header from "./components/Header"
import { WeatherContext } from "./context/WeatherContext";

function App() {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState("");
  const [weatherData, setWeatherData] = useState();

  const countries = [
    { value: "Georgia", label: "Georgia" },
    { value: "Ukraine", label: "Ukraine" },
    { value: "Germany", label: "Germany" },
    { value: "United States", label: "United States" },
    { value: "Italy", label: "Italy" },
    { value: "United Kingdom", label: "United Kingdom" },
  ];

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://universities.hipolabs.com/search?country=${country}&fbclid=IwAR1thIwp6dN-lM5QhJRrMQLsL0Q0AC2x5VUmkwbJKhfmikO1ewx3lMyQLyg`
      );
      const dataJson = await response.json();
      setData(dataJson);
    } catch (err) {
      console.log(err.message);
    }
  };

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        "http://api.weatherapi.com/v1/current.json?key=7a45abd716554029a3a02426231912&q=Tbilisi&aqi=no"
      );
      const dataJson = await response.json();
      setWeatherData(dataJson);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    if (country) {
      fetchData();
    }
  }, [country]);

  useEffect(() => {
    fetchWeather();
  }, []);

  const changeCountry = (selectedCountry) => {
    if (selectedCountry) {
      setCountry(selectedCountry.label);
    } else setCountry("");
  };

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
      }}
    >
      <Routes>
        <Route
          path="/"          
          element={
            <div>
              <Header />
              <div className="filter-center">
                <Filter options={countries} changeCountry={changeCountry} />
              </div>
              <Universities universities={data} country={country} />
            </div>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </WeatherContext.Provider>
  );
}

export default App;

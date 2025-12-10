import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity } from "../api";

const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState("");

  const fetchData = async () => {
    if (!searchCity) return;
    const response = await getWeatherDataForCity(searchCity);
    setData(response);
  };

  const fetchCurrentUserLocationData = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeatherDataForCity(
        position.coords.latitude,
        position.coords.longitude
      ).then((data) => setData(data));
    });
  };

  return (
    <WeatherContext.Provider
      value={{
        searchCity,
        setSearchCity,
        data,
        fetchData,
        fetchCurrentUserLocationData,
      }}>
      {props.children}
    </WeatherContext.Provider>
  );
};

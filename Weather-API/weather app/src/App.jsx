import { useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import { useWeather } from "./context/Weather";
const App = () => {
  const weather = useWeather();
  console.log(weather);

  useEffect(() => {
    // Get Current Location through Longitude and latitude
    weather.fetchCurrentUserLocationData();
  }, []);
  return (
    <center>
      <div className="App">
        <h1>Weather Forecast</h1>
        <Input />
        <Button onClick={weather.fetchData} value="Search" />
        <Card />
        <Button value="Refresh" />
      </div>
    </center>
  );
};

export default App;

const base_url =
  "https://api.weatherapi.com/v1/current.json?key=ec9fbf63441b404cb77135459250812";

export const getWeatherDataForCity = async (city) => {
  const response = await fetch(`${base_url}&q=${city}&aqi=yes`);
  return await response.json();
};

export const getWeatherDataForLocation = async (lat, lon) => {
  const response = await fetch(`${base_url}&q=${lat},${lon}&aqi=yes`);
  return await response.json();
};

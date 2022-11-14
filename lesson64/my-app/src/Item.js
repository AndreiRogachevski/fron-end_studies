import { useEffect, useState } from 'react';

export default function Item(props) {
  const [weather, setWeather] = useState([]);
  console.log(weather);
  async function fetchWeather() {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=1417b42c7af44b368bc170606221411&q=${props.data.name}&aqi=no`
      );
      const json = await response.json();
      setWeather(json);
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    fetchWeather();
  }, [props.data.name]);
  return (
    <li onClick={() => props.addAreas(props.data)}>
      {props.data.name}
      {weather?.current && (
        <span>
          {' '}
          {weather.current.temp_c}°C{' '}
          <img src={weather.current.condition.icon} alt="icon" />
        </span>
      )}
    </li>
  );
}

import axios from 'axios';

const API_KEY = "4e17012c2caeae410527b214b0041def";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},in`;
  const request = axios.get(url);

 console.log('request:', request);
  return {
    type : FETCH_WEATHER,
    payload : request
  };
}

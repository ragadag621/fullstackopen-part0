import axios from "axios";

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
const apiKey = '44dbb2de722bb887404f3e7dfbefd319'

const getWeather = (city) => {
  return axios
    .get(`${baseUrl}?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.data)
}

export default { getWeather }
import axios from 'axios'

const URL = "https://api.openweathermap.org/data/2.5/weather"
const API_KEY = "78c5816b811ade256a9fb96a965e6066"

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY
        }
    })
    return data
}

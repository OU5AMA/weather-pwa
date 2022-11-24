import { useEffect, useState } from 'react'
import { fetchWeather } from './api/fetch_api'
import './App.css'

function App(){
    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState({})
    // console.log(fetchWeather('sale'))

    async function search(e){
      if(e.key === 'Enter'){
        console.log(query);
        const data = await fetchWeather(query);
        setWeather(data);
        setQuery('');
        console.log(weather);


      }
    }




  return(
    <div className="container-app">
      <input 
        type="text" 
        onChange={e=>setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
        />

        {weather.main && (
          <div className="city-card">
            <h2 className="city-name">
            <span>{weather.name} <sup>{weather.sys.country}</sup> {Math.round(weather.main.temp)}&deg;C</span></h2>
            <div className="info">
              <img src={`https://openweathermap.org/img/wn/${weather.weather[0]}.icon.@2x.png`} alt="" />
              <p>{weather.weather[0].description}</p>
            </div>
          </div>
        )}



    </div>
  )
}

export default App

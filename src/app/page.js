"use client"

import { useState, useRef } from "react";
import {WeatherInformation} from "../Components/WeatherInformation"
import axios from "axios";

export default function Home() {

  const [weather, setWeather] = useState();
  const inputRef = useRef();

  const searchCity = async () => {

    const city = inputRef.current.value;
    const key = "2bf2545b6be242cedba39401909dd0d1";

    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    // criando endereço de requisição

    const apiInfo = await axios.get(url);

    setWeather(apiInfo.data);

  };



  return (
     <div className=" container mx-auto h-screen ">
      
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center font-bold text-white text-6xl py-11">Previsão do Tempo</h1>
        <div>
          <input className="w-80 h-9 p-4 rounded-s-3xl border-none text-lg outline-none " ref={inputRef} type="text" placeholder="Digite  nome da cidade ..."/>
          <button onClick={searchCity} className="h-9 rounded-e-3xl bg-orange-500 text-white text-md p-2 px-5 font-bold hover:opacity-75">Buscar</button>
        </div>
        <div className="w-full max-w-6xl mx-auto mt-10 ">
          { weather && <WeatherInformation weather={weather}/>}

        </div>
          


      </div>
    </div>
  );
}

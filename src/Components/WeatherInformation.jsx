export const  WeatherInformation = ({weather}) => {
    
    console.log(weather)

    return(
        <div className="bg-white/70 p-5 text-center rounded-xl font-bold">
            <h2 className="text-3xl mb-6">{weather.name}</h2>
            <div className="flex  justify-center items-center gap-43">
               <img className="w-36 h-36" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}/>   
                <p className="text-5xl">{Math.round(weather.main.temp)} °C </p>
            </div>
            <div className="flex justify-center items-center ">
             <p className="text-xl pl-20" >{weather.weather[0].description}</p>
             <img  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}/>

            </div>
           

             <div className="flex justify-between mt-7 px-9">
                <p>Sensação Térmica:{Math.round(weather.main.feels_like)} °C </p>
                <p>Umidade:{Math.round(weather.main.humidity)}%</p>
                <p>Presão: {weather.main.pressure}</p>
             </div>
                     
            
        </div>   
);
}
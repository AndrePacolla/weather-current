export const  Weather5DaysInformation = ({weather5Days}) => {

    let dailyForecast = {};  // Obj vazio.



    for(let forecast of weather5Days.list){
      
        const date = new Date(forecast.dt * 1000).toLocaleDateString(); // converter.

        if(!dailyForecast[date]){
            dailyForecast[date] = forecast;
        }
    };
    
        const nextFiveDays = Object.values(dailyForecast).slice(1,6);

        const convertDate = (date) => {

            const newDate = new Date(date.dt * 1000).toLocaleDateString("pt-BR", {weekday:"long", day:"2-digit"})
            return newDate ;
        }


    

        return(
            <div className="bg-white/70 p-5 text-center  rounded-xl font-bold mt-10">
                    <p className="text-3xl mb-12 text-orange-400">Previsão de 5 Dias </p>

                    {nextFiveDays.map(forecast =>(
                      <div key={forecast.dt} className="  bg-red-400">
                           
                        <p>{convertDate(forecast)}</p>
                        <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="icon" />
                         <p>{forecast.weather[0].description}</p>   
                         <p>{Math.round(forecast.main.temp_min)} °C min  / {Math.round(forecast.main.temp_max)} °C máx </p>
                      </div>
                      
                       ))}

             </div>   
        );
 }

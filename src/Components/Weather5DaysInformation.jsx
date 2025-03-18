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
            // converter dia da semana.
            return newDate;
            
        }


    

        return(
            <div className="bg-white/70 p-5 text-center  rounded-xl font-bold mt-10">
                 <h3 className="text-3xl mb-10 mt-5 text-orange-400">Próximos 5 Dias </h3>
                 <div className="flex justify-between  p-5 text-center ">   
                    {nextFiveDays.map(forecast =>(
                      <div className=" ml-3 bg-gray-400/40 p-10 rounded-lg " key={forecast.dt}>
                           
                        <p className="my-5 text-2xl font-bold">{convertDate(forecast)}</p>
                        <img className="p-8" src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="icon" />
                         <p className="my-5">{forecast.weather[0].description}</p>   
                         <p className="my-5">{Math.round(forecast.main.temp_min)} °C min  / {Math.round(forecast.main.temp_max)} °C máx </p>
                      </div>
                      
                    ))}

                  </div>
             </div>   
        );
 }

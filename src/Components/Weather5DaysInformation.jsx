export const  Weather5DaysInformation = ({weather5Days}) => {

    let dailyForecast = {};  // Obj vazio.



    for(let forecast of weather5Days.list){
        const date = new Date(forecast.dt * 1000).toLocaleDateString();// converter a data (visual) ex: 3/13/2025
        

        if(!dailyForecast[date]){// date é uma variavel dinamica , pois esta dentro do for, se nao tiver propriedade, adc e coloque os valores, isso evita datas repetidas.
             dailyForecast[date] =  forecast;
        }; 
    };


    const nextFiveDays = Object.values(dailyForecast).slice(1,6);// trasform. array
    console.log(nextFiveDays)

    



        return(
            <div className="bg-white/70 p-5 text-center rounded-xl font-bold mt-10">
                    <p>Previsão de 5 Dias</p>

                    {nextFiveDays.map(forecast =>(
                        <div key={forecast.dt}> 
                            <p>Quarta</p>
                            <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} />
                            <p>{forecast.weather[0].description}</p>
                        
                        </div>
                    ))}
             </div>   
        );
 }

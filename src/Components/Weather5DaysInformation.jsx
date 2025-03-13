export const  Weather5DaysInformation = ({weather5Days}) => {

    let dailyForecast = {
      

    };

    for(let forecast of weather5Days.list){
        const date = new Date(forecast.dt * 1000).toLocaleDateString();// trasnforma info dentro de list em data legivel(visual) ex: 3/13/2025
        console.log(date)

        if(!dailyForecast[date]){// so vai entrar no objeto informação nao repetida.
            dailyForecast[date] = forecast
        }
    }

        return(
            <div className="bg-white/70 p-5 text-center rounded-xl font-bold mt-10">
                    ... teste previsao de 5 dias   

             </div>   

        );






 }

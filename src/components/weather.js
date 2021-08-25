function WeatherComponent(props) {
    return(
        <div className="weather-item">
            <img src={props.link} className="weather-img"></img>
            <h3 className="weather-now">{props.data.weatherNow}</h3>
            <div className="weather-daily">
                <p className="weather-morninig">Утром {props.data.morning}</p>
                <p className="weather-evening">Вечером {props.data.evening}</p>
            </div>
        </div>
    );
}

/**
 * Компонент показывающий погоду
 */

export default WeatherComponent;
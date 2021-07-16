import { status } from '../../constants/status';
import WeatherModel from '../../models/WeatherModel';
import { getWeatherRequestType, getWeatherErrorType, getWeatherSuccessType, GET_WEATHER_REQUEST, GET_WEATHER_SUCCESS, GET_WEATHER_ERROR } from './../actions/getWeather';


export interface Weather {
    temp: string,// Temperature.Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
    feels_like: string,// This temperature parameter accounts for the human perception of weather.Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
    pressure: string,// Atmospheric pressure on the sea level by default, hPa
    humidity: string,// Humidity, %
    icon: string,// Weather icon id
    wind_speed: number
}
type InitialType = {
    status: status,
    weather: Weather[]
}
const initialState: InitialType = {
    status: status.idle,
    weather: []
}

type ActionsType = getWeatherRequestType | getWeatherErrorType | getWeatherSuccessType;

export default (state = initialState, action: ActionsType) => {
    const { type, payload } = action;
    console.log(type);
    switch (type) {
        case GET_WEATHER_REQUEST:
            return { ...state, status: status.pending }
        case GET_WEATHER_SUCCESS:
            console.log(payload[0].weather[0].icon);
            const fetchedWeather = payload.map((e: any) => new WeatherModel(
                e.main.temp,
                e.main.feels_like,
                e.main.pressure,
                e.main.humidity,
                e.weather[0].icon,
                e.wind.speed
            ));

            return { ...state, status: status.success, weather: fetchedWeather }
        case GET_WEATHER_ERROR:
            return { ...state, status: status.error }
        default:
            return state
    }
}


// e.main.temp Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
// e.main.feels_like This temperature parameter accounts for the human perception of weather. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
// e.main.pressure Atmospheric pressure on the sea level by default, hPa
// e.main.humidity Humidity, %
// e.weather.icon Weather icon id
// e.wind.speed
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { status } from '../../constants/status';
import IWeather from '../../models/IWeather';
import WeatherModel from '../../models/WeatherModel';
import { getWeatherError, getWeatherSuccess } from '../actions/getWeather';
import { getWeatherRequest } from '../actions/getWeather';

type InitialType = {
    status: status,
    weather: IWeather[]
}
const initialState: InitialType = {
    status: status.idle,
    weather: []
}
//type ActionsType = typeof getWeatherRequest | typeof getWeatherSuccess | typeof getWeatherError;

export const getWeather = createReducer(initialState, (builder) =>
    builder
        .addCase(getWeatherRequest, (state, action: PayloadAction<string>) => {
            return { ...state, status: status.pending }
        })
        .addCase(getWeatherError, (state, action: PayloadAction<string>) => {
            return { ...state, status: status.error }
        })
        .addCase(getWeatherSuccess, (state, action: PayloadAction<any>) => {
            const { payload } = action;
            const fetchedWeather = payload.map(({ main, weather, wind }: any) => new WeatherModel(
                main.temp,
                main.feels_like,
                main.pressure,
                main.humidity,
                weather[0].icon,
                wind.speed
            ));
            return { ...state, status: status.success, weather: fetchedWeather }
        })
)


// e.main.temp Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
// e.main.feels_like This temperature parameter accounts for the human perception of weather. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
// e.main.pressure Atmospheric pressure on the sea level by default, hPa
// e.main.humidity Humidity, %
// e.weather.icon Weather icon id
// e.wind.speed
import { Weather } from "../redux/reducers/getWeather";

export default class WeatherModel implements Weather {
    constructor(temp: string,
        feels_like: string,
        pressure: string,
        humidity: string,
        icon: string,
        wind_speed: number) {
        this.temp = temp;
        this.feels_like = feels_like;
        this.pressure = pressure;
        this.humidity = humidity;
        this.icon = icon;
        this.wind_speed = wind_speed;
    }
    temp: string;
    feels_like: string;
    pressure: string;
    humidity: string;
    icon: string;
    wind_speed: number;

}
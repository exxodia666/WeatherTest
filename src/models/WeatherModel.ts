import IWeather from "./IWeather";
export default class WeatherModel implements IWeather {
    constructor(temp: number,
        feels_like: number,
        pressure: number,
        humidity: number,
        icon: string,
        wind_speed: number) {
        this.temp = Math.round(temp - 273);
        this.feels_like = Math.round(feels_like - 273);
        this.pressure = pressure;
        this.humidity = humidity;
        this.icon = icon;
        this.wind_speed = wind_speed;
    }
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    icon: string;
    wind_speed: number;

}
export default interface IWeather {
    temp: number,// Temperature.Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
    feels_like: number,// This temperature parameter accounts for the human perception of weather.Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
    pressure: number,// Atmospheric pressure on the sea level by default, hPa
    humidity: number,// Humidity, %
    icon: string,// Weather icon id
    wind_speed: number
}
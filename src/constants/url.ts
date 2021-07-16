import { key } from "./key";

export const FIVE_DAYS_FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?q=Rio&appid=${key}`

export const image_url = (iconName: string) =>
    `http://openweathermap.org/img/wn/${iconName}@2x.png`;
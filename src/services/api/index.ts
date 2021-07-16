import { FIVE_DAYS_FORECAST_URL } from './../../constants/url';
import axios from "axios"

export const axiosWeather = () => axios.get(FIVE_DAYS_FORECAST_URL)

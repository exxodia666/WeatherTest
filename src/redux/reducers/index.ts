import { combineReducers } from "redux";
import { getWeather } from "./getWeather";

export default combineReducers({
    weather: getWeather
})

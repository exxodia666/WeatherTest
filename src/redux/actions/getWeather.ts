export const GET_WEATHER_REQUEST = 'GET_WEATHER_REQUEST';
export const GET_WEATHER_ERROR = 'GET_WEATHER_ERROR';
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';

export type getWeatherRequestType = {
    type: typeof GET_WEATHER_REQUEST
    payload: string
}
export type getWeatherErrorType = {
    type: typeof GET_WEATHER_ERROR
    payload: string
}
export type getWeatherSuccessType = {
    type: typeof GET_WEATHER_SUCCESS
    payload: any
}

export const getWeatherRequest = (payload: string): getWeatherRequestType => ({
    type: GET_WEATHER_REQUEST,
    payload
})
export const getWeatherSuccess = (payload: string): getWeatherSuccessType => ({
    type: GET_WEATHER_SUCCESS,
    payload: payload
})
export const getWeatherError = (payload: string): getWeatherErrorType => ({
    type: GET_WEATHER_ERROR,
    payload: payload
})

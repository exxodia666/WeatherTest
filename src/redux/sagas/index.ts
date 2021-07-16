import { all } from '@redux-saga/core/effects';
import getWeatherWatcher from './getWeather';

//ROOT SAGA
export default function* root() {
    yield all([
        getWeatherWatcher(),
        //Another sagas
    ]);
}

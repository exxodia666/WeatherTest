import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import { white } from 'react-native-paper/lib/typescript/styles/colors';
import { SvgXml } from 'react-native-svg';
import DayButton from '../components/DayButton';
import Row from '../components/Row';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import { RootState } from '../redux';
import { getWeatherRequest } from '../redux/actions/getWeather';
import { status as res_status } from '../constants/status'
import { ActivityIndicator } from 'react-native-paper';
import WeatherComponent from '../components/WeatherComponent';

const MainScreen = () => {
    const [selected, setSelected] = React.useState(0);
    let i = 0;
    let days = new Array(5).fill(0);
    const { status, weather } = useAppSelector((state: RootState) => state.weather);

    days = days.map((e, index) => {
        const date = new Date(new Date().getTime() + (i++) * 24 * 3600000).getDate();
        if (index === selected)
            return { date: date, selected: true }
        return { date: date, selected: false }

    });
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        dispatch(getWeatherRequest("Rio"));
    }, []);

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', }}>
            <View style={{
                justifyContent: 'center', alignItems: 'center',
                //borderWidth: 1, 
                width: '90%'
            }}>
                <Row>
                    {days.map((e, index) => <DayButton setSelected={() => setSelected(index)} selected={e.selected} key={e.date} day={e.date} />)}
                </Row>
            </View>
            {status === res_status.success && <WeatherComponent
                temp={weather[selected].temp}
                feels_like={weather[selected].feels_like}
                humidity={weather[selected].humidity}
                icon={weather[selected].icon}
                wind_speed={weather[selected].wind_speed}
                pressure={weather[selected].pressure}
            />}
            {status === res_status.pending && <ActivityIndicator />}
            {status === res_status.error && <Text>Error</Text>}
        </View>
    )
}

export default MainScreen

const styles = StyleSheet.create({

})

import React from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'
import { Dimensions } from 'react-native'
import { Image } from 'react-native'
import { Easing } from 'react-native'
import { image_url } from '../constants/url'
import { Weather } from '../redux/reducers/getWeather'
import Row from './Row'

const WeatherComponent: React.FC<Weather> = ({ temp, feels_like, pressure, humidity, icon, wind_speed }) => {
    const fadeAnim = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
        console.log('mounted');

        Animated.timing(
            fadeAnim,
            {
                easing: Easing.bounce,
                toValue: 1,
                duration: 900,
                useNativeDriver: true,
            }
        ).start();
        return () => {
            fadeAnim.setValue(0);
        }

    }, [temp, feels_like, pressure, humidity, icon, wind_speed]);



    return (
        <Animated.View style={[styles.container, {
            transform: [{
                translateX: fadeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [250, 0]
                }),
            }]
        }]}>
            <Row>
                <View>
                    <Image source={{ uri: image_url(icon) }} style={styles.icon} />
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 200,
                }}>
                    <Row>
                        <Text style={styles.text}>Temperature:</Text>
                        <Text style={styles.text}>{temp} K</Text>
                    </Row>
                    <Row>
                        <Text style={styles.text}>Feels like: </Text>
                        <Text style={styles.text}>{feels_like} K</Text>
                    </Row>
                </View>
            </Row>
            <Row>
                <Text style={styles.text}>Pressure: </Text>
                <Text style={styles.text}>{pressure} hPa</Text>
            </Row>
            <Row>
                <Text style={styles.text}>Humidity: </Text>
                <Text style={styles.text}>{humidity} %</Text>
            </Row>
            <Row>
                <Text style={styles.text}>Wind speed: </Text>
                <Text style={styles.text}>{wind_speed} m/s</Text></Row>
        </Animated.View>
    )
}

export default WeatherComponent

const styles = StyleSheet.create({
    text: {
        padding: 10,
        fontFamily: 'Roboto-Black'
    },
    container: {
        justifyContent: 'center', alignItems: 'center',
        width: Dimensions.get('screen').width * 0.8,
        borderRadius: 2,
        elevation: 1,
    },
    icon: {
        borderWidth: 1,
        width: 100,
        height: 100,
    }
})

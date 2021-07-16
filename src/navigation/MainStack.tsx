import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';



const MainStack = () => {
    const Stack = createStackNavigator();
    return (<Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen} />
    </Stack.Navigator>);
}

export default MainStack;
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
interface IDayButton {
    day: number,
    selected: boolean,
    setSelected: () => void
}

const DayButton: React.FC<IDayButton> = ({ day, selected, setSelected }) => {
    return (
        <TouchableOpacity
            onPress={setSelected}
            style={[styles.container, styles.selected_styles(selected)]}>
            <Text style={{ fontFamily: 'Roboto-Black' }}>{day}</Text>
        </TouchableOpacity>
    )
}

export default DayButton

const styles = StyleSheet.create({
    selected_styles: (selected: boolean) => ({
        backgroundColor: !selected ? 'white' : 'silver',
    }),
    container: {
        backgroundColor: 'white',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        elevation: 5,
        height: 50,
        width: 50,
    }
})

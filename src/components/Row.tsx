import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Row = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

export default Row

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Sandbox() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Four</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'center',
        // justifyContent: 'flex-end',
        justifyContent: 'space-around',
        alignItems: 'center',
        // alignItems: 'flex-start', // default
        // alignItems: 'flex-end', //bottom
        paddingTop: 40,
        backgroundColor: '#ddd'
    },
    boxOne: {
        flex:1,
        backgroundColor: 'blue',
        padding: 10
    },
    boxTwo: {
        flex:1,
        backgroundColor: 'red',
        padding: 10
    },
    boxThree: {
        flex:1,
        backgroundColor: 'green',
        padding: 10
    },
    boxFour: {
        flex:1,
        backgroundColor: 'violet',
        padding: 10
    },
})
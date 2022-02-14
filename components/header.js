import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {

    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Task List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'black',
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});


import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import Person from './components/Person'


export default function App() {
  const [people, setPeople] = useState([
    { name: 'adam',   key: '1'},
    { name: 'log',    key: '2'},
    { name: 'micol',  key: '3'},
    { name: 'sachin', key: '4'},
    { name: 'max',    key: '5'},
    { name: 'evren',  key: '6'},
    { name: 'logan',  key: '7'},
    { name: 'biden',  key: '8'},
    { name: 'trump',  key: '9'},
  ]) 

  return (
    // Update State Real Time as Typing with Text Input
    <ScrollView style={styles.container}>
      { people.map((item) => {
        return (
          <View key ={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
});

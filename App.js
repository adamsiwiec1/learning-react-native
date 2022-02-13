import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Person from './components/Person'


export default function App() {
  const [person, setPerson] = useState({}) 

  return (

 // Update State Real Time as Typing with Text Input
    <View style={styles.container}>
      <Text>Enter name:</Text>

      <TextInput
      multiline
      style={styles.input}
      placeholder='e.g Raj Bal'
      onChangeText={(val) => setPerson({name: val, age: person.age})}
      />


      <Text>Enter age:</Text>
      <TextInput
      keyboardType='numeric' // Many different props you can add to a text input field
      style={styles.input}
      placeholder='e.g 20'
      onChangeText={(val) => setPerson({name: person.name, age: val})}
      />  

      <Text>name: {person.name} age: {person.age}</Text>
    </View>




  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,

  }
});

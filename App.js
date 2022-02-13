import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [person, setPerson] = useState({name: 'log', age:99}) 

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
      style={styles.container}
      placeholder='e.g Raj Bal'
      />

      <Text>name: {person.name}. age: {person.age}</Text>
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
});

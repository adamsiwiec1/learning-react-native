import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Person from './components/Person'


export default function App() {
  const [people, setPeople] = useState([
    { name: 'adam',   id: '1'},
    { name: 'log',    id: '2'},
    { name: 'micol',  id: '3'},
    { name: 'sachin', id: '4'},
    { name: 'max',    id: '5'},
    { name: 'evren',  id: '6'},
    { name: 'logan',  id: '7'},
    { name: 'biden',  id: '8'},
    { name: 'trump',  id: '9'},
  ]);

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id != id);
    })
  }

  return (
    //You can use the map function or FlatList to output a list 

    // The better way to do it
    <View style={styles.container}>
      <FlatList 
        numColumns={2}
        keyExtractor={(item) => people.id}
        data={people}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
          )}
      />
    </View>
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
    backgroundColor: 'black',
    color: 'white',
    fontSize: 24,
    marginHorizontal: 10
  }
});

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  // we can use setName to set the name to something else in the future
  const [name, setName] = useState('adam');
  const [person, setPerson] = useState({ name: 'log', age: 99});


  const clickHandler = () => {
    setName('another name');
    setPerson({name: 'sachin', age: 41})
  }


  return (
    <View style={styles.container}>

    {/* Lesson 3 */}

      {/* <View style={styles.header}>
        <Text style={styles.boldText}>Hello World! </Text>
      </View>
      <View style={styles.body}>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
      </View> */}

    {/* End Lesson 3 */}

    {/* Lesson 4 - Using State*/}

    {/* useState Hook */}
    <Text>my name is {name}</Text>
    <Text>the person is {person.name} and his age is {person.age}</Text>
      
    <View style={styles.buttonContainer}>
      <Button title='update state' onPress={clickHandler}/>
    </View>


    {/* End Lesson 4 */}


    </View>
  );
}


// Lesson 1

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   header: {
//     backgroundColor: 'pink',
//     padding: 20,
//   },
//   boldText: {
//     fontWeight: 'bold'
//   },
//   body: {
//     backgroundColor: 'yellow',
//     padding: 20,
//   },
// });



// Lesson 2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20
  }
});
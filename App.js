import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import ToDoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import { v4 as uuidv4 } from 'uuid';
import Sandbox from './components/sandbox'


export default function App() {
  
  const moment = require('moment');
  const time = ` ${moment().format('MMMM Do YYYY, h:mm:ss a')}`

  const [todos, setTodos] = useState([
    { text: 'go grocery shopping', date: '',  key: uuidv4() },
    { text: 'motorcyle ride',      date: '',  key: uuidv4() },
    { text: 'write code',          date: '',  key: uuidv4() },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
    return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) => {

    if (text.length >= 3){
      setTodos((prevTodos) => {
          return [
            { text: text ,key: uuidv4() },
            ...prevTodos // ... is the same as * in python
          ];
      });
    } else {
      Alert.alert('Holdup!', 'A task must be 3 chars or greater.',[
        { text: 'Understood', onPress: () => console.log('alert closed')}
      ]);
    }
  };


  return ( 
    // <Sandbox/>
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
       console.log('dismissed keyboard')
       }}>
      <View style={styles.container}>
      <Header/>
        <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList
            data={todos}
            renderItem={({item}) => (
            <ToDoItem item={item} pressHandler={pressHandler}/>
            )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    backgroundColor: 'papayawhip',
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  }
});

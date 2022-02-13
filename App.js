import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';
import ToDoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import { v4 as uuidv4 } from 'uuid';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'go grocery shopping',  key: '1' },
    { text: 'motorcyle ride',       key: '2' },
    { text: 'write code',           key: '3' },
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
    return prevTodos.filter(todo => todo.key != key);
  });
  }

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [
        { text: text,key: uuidv4() },
        ...prevTodos // ... is same as * in python
      ]
    });
  }


  return ( 
    <View style={styles.container}>
        {/* header */}
        <Header/>
        <View style={styles.container}>
          <View style={styles.content}>
            <AddTodo submitHandler={submitHandler}/>
            <View style={styles.list}>
              <FlatList
              data={todos}
              renderItem={({item}) => (
                <ToDoItem item={item} pressHandler={pressHandler}></ToDoItem>
              )}
              />
            </View>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});

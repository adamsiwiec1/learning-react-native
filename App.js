import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import ToDoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import { v4 as uuidv4 } from 'uuid';
import Sandbox from './components/sandbox'

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'go grocery shopping',  key: '1'},
    { text: 'motorcyle ride',       key: '2' },
    { text: 'write code',           key: '3' },
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
            { text: text,key: uuidv4() },
            ...prevTodos // ... is same as * in python
          ];
      });
    } else {
      Alert.alert('Holdup!', 'A task must be greater than 3 chars.',[
        { text: 'Understood', onPress: () => console.log('alert closed')}
      ]);
    }
  };


  return ( 
    <Sandbox/>
  //   <TouchableWithoutFeedback onPress={() => {
  //     Keyboard.dismiss();
  //      console.log('dismissed keyboard')
  //      }}>
  //     <View style={styles.container}>
  //     <Header/>
  //       <View style={styles.content}>
  //       <AddTodo submitHandler={submitHandler}/>
  //         <View style={styles.list}>
  //           <FlatList
  //           data={todos}
  //           renderItem={({item}) => (
  //           <ToDoItem item={item} pressHandler={pressHandler}/>
  //           )}
  //           />
  //         </View>
  //       </View>
  //     </View>
  //   </TouchableWithoutFeedback>
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

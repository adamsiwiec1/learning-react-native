import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function AddTodo({ submitHandler }) {

    const [task, setText] = useState({text: '', date: ''});

    const changeHandler = (val) => {
        setText(val)
    }

    const pressHandler = () => {
        submitHandler(task);
        setText('');
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='new task..'
                onChangeText={changeHandler}
                value={task}
            />
            <View style={styles.btn}>
                <Button
                    onPress={pressHandler}
                    title='add task'
                    color='white'
                    size='lg'
                />
            </View>

        </View>
    );
}



const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,

    },
    btn: {
        backgroundColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
    }
});
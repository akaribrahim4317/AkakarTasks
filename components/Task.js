import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Task = ({ task, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, task.done && styles.done]}>
        <Text>Task: {task.taskTitle} </Text>
        <Text>description: {task.taskDescription} </Text>
        <Text>dueDate: {task.dueDate} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Task;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'white',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginVertical: 5,
  },
  done: {
    backgroundColor: '#d3ffd3', // Light green background for done tasks
  },
});

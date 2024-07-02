import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Task = ({ task, pressed, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.taskContainer, pressed && styles.pressedTask]}>
        <Text style={styles.taskTitle}>{task.taskTitle}</Text>
        <Text style={styles.taskDescription}>{task.taskDescription}</Text>
        <Text style={styles.taskDueDate}>Due: {task.dueDate}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  pressedTask: {
    backgroundColor: 'lightgray',
  },
  taskTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  taskDescription: {
    fontSize: 16,
  },
  taskDueDate: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Task;

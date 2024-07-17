// Task.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {wp} from '../utils';
interface TaskProps {
  task: {
    title: string;
    description: string;
    assignedTo: string;
    dueDate: string;
  };
}

const Task:React.FC<TaskProps> = ({task}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.description}>{task.description}</Text>
      <Text style={styles.assignedTo}>Assigned to: {task.assignedTo}</Text>
      <Text style={styles.dueDate}>Due: {task.dueDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    marginHorizontal: wp('5%'),
    backgroundColor: '#FFB200',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  assignedTo: {
    fontSize: 14,
    color: '#333',
  },
  dueDate: {
    fontSize: 14,
    color: '#333',
  },
  status: {
    fontSize: 14,
    color: '#333',
  },
});

export default Task;

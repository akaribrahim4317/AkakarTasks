import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native';
import moment from 'moment';
import Task from '../components/Task';
import AdminScreen from './AdminScreen';

const MainScreen = () => {
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const fetchUserRole = async () => {
      const userRole = await getUserRole();
      setIsAdmin(userRole === 'admin');
    };

    fetchUserRole();
  }, []);

  const getUserRole = async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('employee');
      }, 1000);
    });
  };

  if (isAdmin === null) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return isAdmin ? <AdminScreen /> : <TasksScreen />;
};

const TasksScreen = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      taskTitle: 'Task 1',
      taskDescription: 'Task 1 description',
      dueDate: '2022-01-01',
      done: false,
    },
    {
      id: 2,
      taskTitle: 'Task 2',
      taskDescription: 'Task 2 description',
      dueDate: '2022-01-01',
      done: false,
    },
    {
      id: 3,
      taskTitle: 'Task 3',
      taskDescription: 'Task 3 description',
      dueDate: '2022-01-01',
      done: false,
    },
    {
      id: 4,
      taskTitle: 'Task 4',
      taskDescription: 'Task 4 description',
      dueDate: '2022-01-01',
      done: false,
    },
  ]);

  const toggleTaskDone = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  };

  const renderItem = ({ item }) => (
    <Task task={item} onPress={() => toggleTaskDone(item.id)} />
  );

  const formattedDate = moment().format('DD/MM/YYYY');
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 10}}>
        <Text style={{fontSize: 40}}>Tasks</Text>
        <Text style={styles.dateText}>Date: {formattedDate}</Text>
        <FlatList
          data={tasks}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'gray',
  },
});

export default MainScreen;

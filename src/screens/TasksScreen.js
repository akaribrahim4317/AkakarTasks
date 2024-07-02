import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import moment from 'moment';


import Components from '../components'

const TasksScreen = () => {
  const [pressedTasks, setPressedTasks] = useState({});

  const tasks = [
    {
      id: 1,
      taskTitle: 'Task 1',
      taskDescription: 'Description 1',
      dueDate: '2022-01-01',
    },
    {
      id: 2,
      taskTitle: 'Task 2',
      taskDescription: 'Description 2',
      dueDate: '2022-01-02',
    },
    {
      id: 3,
      taskTitle: 'Task 3',
      taskDescription: 'Description 3',
      dueDate: '2022-01-03',
    },
  ];

  const toggleTaskDone = taskId => {
    setPressedTasks(prevState => ({
      ...prevState,
      [taskId]: !prevState[taskId],
    }));
  };

  const renderItem = ({item}) => (
    <Components.Task
      task={item}
      pressed={!!pressedTasks[item.id]}
      onPress={() => toggleTaskDone(item.id)}
    />
  );

  const formattedDate = moment().format('DD/MM/YYYY');

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 10}}>
        <Text style={{fontSize: 40, fontWeight: 300}}>Tasks</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.dateText}>Date: {formattedDate}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 10, borderWidth: 0.25, padding: 7, borderRadius: 5}} >
            <Text style={{marginRight: 10}} >Filter</Text>
            <Image
              source={require('../../assets/images/filter.png')}
              style={{width: 20, height: 20}}
            />
          </View>
        </View>
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
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
    color: 'gray',
  },
});

export default TasksScreen;

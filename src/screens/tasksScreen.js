// TaskScreen.js
import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {tasks} from '../constants';
import Task from '../components/Task';

const TaskScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => console.log(item)}>
              <Task task={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  dateContainer: {
    alignSelf: 'flex-end',
    marginRight: 20,
    height: 50,
  },
});

export default TaskScreen;

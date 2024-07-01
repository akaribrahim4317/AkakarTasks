import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomButton = props => {
  return (
    <Pressable style={styles.pressable} onPress={props.onPress} >
      <View style={styles.container}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </View>
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  pressable: {
    width: '90%', 
    alignSelf: 'center', 
  },
  container: {
    backgroundColor: 'red',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50, 
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
})

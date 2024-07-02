import { StyleSheet, TextInput, View, Text } from 'react-native'
import React from 'react'

const InputBox = ({placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container} >
      <TextInput  placeholder={placeholder} style={{marginHorizontal: 10}} secureTextEntry />
    </View>
  )
}

export default InputBox

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    width: '90%',
   
    borderRadius: 5,
    height: 50,
    margin: 10,
    transparent: true,
  },
})
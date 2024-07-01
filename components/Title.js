import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = (props) => {
  return (
    <View>
      <Text style={styles.title} >{props.title}</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
    title : { 
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 10
    }
})
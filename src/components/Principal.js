import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Principal extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> principal </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        marginTop:40
    }
})

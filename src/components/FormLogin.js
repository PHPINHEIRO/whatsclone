import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'

export default class FormLogin extends Component {
  render() {
    return (
    <View style={styles.container}>
        <View style={styles.title}>
            <Text style={styles.txtTitle}>WhatsApp Clone</Text>
        </View>
        <View style={styles.formLogin}>
            <TextInput style={styles.input} placeholder='E-mail'></TextInput>
            <TextInput style={styles.input} placeholder='Senha'></TextInput>
            <Text style={styles.txt}>Ainda nao tem cadrastro? Cadastre-se</Text>
        </View>
        <View style={styles.button}>
            <Button title='Acessar' color='#115E54' onPress={()=>{}}></Button>
        </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:10
    },
    title:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    formLogin:{
        flex:2,
    },
    button:{
        flex:2,
    },
    input:{
        height:45,
        fontSize:20
    },
    txt:{
        fontSize:18
    },
    txtTitle:{
        fontSize:35
    },
})

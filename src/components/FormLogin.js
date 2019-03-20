import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Button, TouchableHighlight} from 'react-native'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'

 class FormLogin extends Component {
  render() {
    return (
    <View style={styles.container}>
        <View style={styles.title}>
            <Text style={styles.txtTitle}>WhatsApp Clone</Text>
        </View>
        <View style={styles.formLogin}>
            <TextInput value={this.props.email} style={styles.input} placeholder='E-mail'></TextInput>
            <TextInput value={this.props.senha} style={styles.input} placeholder='Senha'></TextInput>
            <TouchableHighlight onPress={() => Actions.formcadastro() }>
                <Text style={styles.txt}>Ainda nao tem cadrastro? Cadastre-se</Text>
            </TouchableHighlight>
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

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
)
export default connect(mapStateToProps,null)(FormLogin)
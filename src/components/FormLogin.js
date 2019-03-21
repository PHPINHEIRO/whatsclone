import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Button, TouchableHighlight, ImageBackground } from 'react-native'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'
import { modificaEmail, modificaSenha,autenticarUsuario } from '../actions/AutenticacaoAction'

class FormLogin extends Component {

    _autenticarUsuario(){
        const { email, senha } = this.props
        this.props.autenticarUsuario({ email,senha})
    }

    render() {
        return (
            <ImageBackground style={{flex:1}} source={require('../img/bg.png')}>
                <View style={styles.container}>
                    <View style={styles.title}>
                        <Text style={styles.txtTitle}>WhatsApp Clone</Text>
                    </View>
                    <View style={styles.formLogin}>
                        <TextInput placeholderTextColor='#FFF' value={this.props.email} style={styles.input} placeholder='E-mail' onChangeText={texto => this.props.modificaEmail(texto)}></TextInput>
                        <TextInput placeholderTextColor='#FFF' secureTextEntry={true} value={this.props.senha} style={styles.input} placeholder='Senha' onChangeText={texto => this.props.modificaSenha(texto)}></TextInput>
                        <Text style={{color:'#8f1537',fontSize:18}}>{this.props.erroLogin}</Text>
                        <TouchableHighlight onPress={() => Actions.formcadastro()}>
                            <Text style={styles.txt}>Ainda nao tem cadrastro? Cadastre-se</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.button}>
                        <Button title='Acessar' color='#115E54' onPress={() =>this._autenticarUsuario()}></Button>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    formLogin: {
        flex: 2,
    },
    button: {
        flex: 2,
    },
    input: {
        height: 45,
        fontSize: 20,
        color:'#FFF',
    },
    txt: {
        fontSize: 18,
        color:'#FFF',
    },
    txtTitle: {
        fontSize: 35,
        color:'#FFF',
    },
})

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroLogin: state.AutenticacaoReducer.erroLogin,
    }
)
export default connect(mapStateToProps, { modificaEmail, modificaSenha, autenticarUsuario })(FormLogin)
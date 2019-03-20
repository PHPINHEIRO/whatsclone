import React, { Component } from 'react'
import { TextInput, Button, View, ImageBackground,Text,StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import { modificaEmail, modificaSenha, modificaNome } from '../actions/AutenticacaoAction';

class FormCadastro extends Component {
    render() {
        return (
            <ImageBackground style={{flex:1}} source={require('../img/bg.png')}>
            <View style={{ flex: 1, padding: 10 }}>
                <View style={styles.title}>
                        <Text style={styles.txtTitle}>WhatsApp Clone</Text>
                </View>
                <View style={{ flex: 4, justifyContent: 'center' }}>
                    <TextInput placeholderTextColor='#FFF' value={this.props.nome} placeholder="Nome" style={{ fontSize: 20, height: 45,color:'#FFF' }} onChangeText={texto => this.props.modificaNome(texto)} />
                    <TextInput placeholderTextColor='#FFF' value={this.props.email} placeholder="E-mail" style={{ fontSize: 20, height: 45,color:'#FFF' }} onChangeText={texto => this.props.modificaEmail(texto)} />
                    <TextInput placeholderTextColor='#FFF' secureTextEntry={true} value={this.props.senha} placeholder="Senha" style={{ fontSize: 20, height: 45,color:'#FFF' }} onChangeText={texto => this.props.modificaSenha(texto)} />
                </View>
                <View style={{ flex: 1 }}>
                    <Button title="Cadastrar" color="#115E54" onPress={() => false} />
                </View>
            </View>
            </ImageBackground>
        )
    }
}

const mapStateToProps = state => { 
    return (
        {
            nome: state.AutenticacaoReducer.nome,
            email: state.AutenticacaoReducer.email,
            senha: state.AutenticacaoReducer.senha
        }
    );
}
const styles = StyleSheet.create({
    title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    txtTitle: {
        fontSize: 35,
        color:'#FFF',
    },
})
export default connect(mapStateToProps, { modificaEmail, modificaSenha, modificaNome })(FormCadastro);
import React, { Component } from 'react'
import { TextInput, Button,View } from 'react-native'
import { connect } from 'react-redux'

class FormCadastro extends Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 10 }}>
                <View style={{ flex: 4, justifyContent: 'center' }}>
                    <TextInput value={this.props.nome} placeholder="Nome" style={{ fontSize: 20, height: 45 }} />
                    <TextInput value={this.props.email} placeholder="E-mail" style={{ fontSize: 20, height: 45 }} />
                    <TextInput value={this.props.senha} placeholder="Senha" style={{ fontSize: 20, height: 45 }} />
                </View>
                <View style={{ flex: 1 }}>
                    <Button title="Cadastrar" color="#115E54" onPress={() => false} />
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        nome: state.AutenticacaoReducer.nome,
    }
)

export default connect(mapStateToProps,null)(FormCadastro)

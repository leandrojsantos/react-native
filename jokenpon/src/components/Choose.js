import React, {Component} from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';
import Icon from './Icon';

class Choose extends Component {

    constructor(props) {
        super(props);

        this.state = {
            escolhaUsuario: '',
            escolhaComputador: '',
            resultado: ''
        };
    }

    jokenpo(escolhaUsuario) {

        const numAleatorio = Math.floor(Math.random() * 3);

        let escolhaComputador = '';

        switch (numAleatorio) {
            case 0:
                escolhaComputador = 'pedra';
                break;
            case 1:
                escolhaComputador = 'papel';
                break;
            case 2:
                escolhaComputador = 'tesoura';
                break;
            default:
                escolhaComputador = '';
        }

        let resultado = '';

        if (escolhaComputador === 'pedra') {
            if (escolhaUsuario === 'pedra') {
                resultado = 'Empate';
            }

            if (escolhaUsuario === 'papel') {
                resultado = 'Você ganhou';
            }

            if (escolhaUsuario === 'tesoura') {
                resultado = 'Você perdeu';
            }
        }

        if (escolhaComputador === 'papel') {
            if (escolhaUsuario === 'papel') {
                resultado = 'Empate';
            }

            if (escolhaUsuario === 'tesoura') {
                resultado = 'Você ganhou';
            }

            if (escolhaUsuario === 'pedra') {
                resultado = 'Você perdeu';
            }
        }

        if (escolhaComputador === 'tesoura') {
            if (escolhaUsuario === 'tesoura') {
                resultado = 'Empate';
            }

            if (escolhaUsuario === 'pedra') {
                resultado = 'Você ganhou';
            }

            if (escolhaUsuario === 'papel') {
                resultado = 'Você perdeu';
            }
        }

        this.setState({escolhaUsuario, escolhaComputador, resultado});
    }

    render() {
        return (
            <View>

                <View style={styles.painelAcoes}>

                    <View style={styles.btnEscolha}>
                        <Button
                            title="pedra"
                            onPress={() => {
                            this.jokenpo('pedra');
                        }}/>
                    </View>

                    <View style={styles.btnEscolha}>
                        <Button
                            title="papel"
                            onPress={() => {
                            this.jokenpo('papel');
                        }}/>
                    </View>

                    <View style={styles.btnEscolha}>
                        <Button
                            title="tesoura"
                            onPress={() => {
                            this.jokenpo('tesoura');
                        }}/>
                    </View>

                </View>

                <View style={styles.palco}>
                    <Text style={styles.txtResultado}>{this.state.resultado}</Text>

                    <Icon escolha={this.state.escolhaComputador} jogador='Computador'/>

                    <Icon escolha={this.state.escolhaUsuario} jogador='Você'/>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    btnEscolha: {
        width: 120
    },
    painelAcoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    palco: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    txtResultado: {
        fontSize: 25,
        alignItems: 'center',
        fontWeight: 'bold',
        color: '#fff',
        height: 60,
        marginTop: 10,
        marginEnd: 10
    }
});

export default Choose;
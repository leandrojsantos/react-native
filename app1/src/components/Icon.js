import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

class Icon extends Component {
    render() {
        if (this.props.escolha === 'pedra') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>

                    <Image
                        source={{
                        uri: 'https://br.stockfresh.com/zooms/stockfresh_id4859227_a32974.jpg'
                    }}
                        style={{
                        width: 100,
                        height: 100
                    }}/>

                </View>
            );
        } else if (this.props.escolha === 'papel') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>

                    <Image
                        source={{
                        uri: 'https://thumbs.dreamstime.com/z/avi%C3%A3o-de-papel-de-origami-87905948.jpg'
                    }}
                        style={{
                        width: 100,
                        height: 100
                    }}/>

                </View>
            );
        } else if (this.props.escolha === 'tesoura') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>

                    <Image
                        source={{
                        uri: 'https://i.pinimg.com/236x/f4/0c/40/f40c4062ed4ab5a31a5b0d7729cb0dbf.jpg'
                    }}
                        style={{
                        width: 100,
                        height: 100
                    }}/>

                </View>
            );
        }

        return false;
    }
}

const styles = StyleSheet.create({
    icone: {
        alignItems: 'center',
        marginBottom: 20
    },
    txtJogador: {
        fontSize: 18
    }
});

export default Icon;

import React, { Component } from 'react';
import { View, Image } from 'react-native';

const imagem = require('../../assets/jokenpo.png');

class Narbar extends Component {
  render() {
    return (
      <View>
        <Image source={imagem} />
      </View>
    );
  }
}

export default Narbar;

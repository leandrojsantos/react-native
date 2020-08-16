import React, {Component} from 'react';
import {View, Image} from 'react-native';

class Narbar extends Component {
    render() {
        return (
            <View>
                <Image
                    source={{
                    uri: 'https://i0.wp.com/heroisx.com/wp-content/uploads/2015/07/Jo-Ken-Po.jpg'
                }}
                    style={{
                    width: 400,
                    height: 200
                }}/>
            </View>
        );
    }
}

export default Narbar;

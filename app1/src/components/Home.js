import React, {Component} from 'react'
import {View} from 'react-native';
import Choose from './Choose';
import Icon from './Icon';
import Narbar from './Navbar';

class Home extends Component {

    render() {
        return (
            <View>
                <Narbar/>
                <Choose/>
                <Icon/>
            </View>
        );
    }
}

export default Home;
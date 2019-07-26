import React from 'react';
import { Text, View,TouchableOpacity } from 'react-native';

export default class Home extends React.Component {
    goToAbout(){
        this.props.navigation.navigate('About')
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <Text>Welcome To Home Screen</Text>
                <TouchableOpacity onPress={this.goToAbout.bind(this)}><Text>About Us</Text></TouchableOpacity>

            </View>
        )
    }
}
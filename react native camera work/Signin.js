import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class Signin extends React.Component {
    goToSignup() {
        this.props.navigation.navigate('Signup')
    }
    goToHome(){
        this.props.navigation.navigate('App')

    }

    render() {
        return (
            <View style={{ flex: 1, marginTop: 25 }}>
                <Text>Welcome To Signin Screen</Text>
                <TouchableOpacity onPress={this.goToSignup.bind(this)}><Text>Don't have an account? Signup</Text></TouchableOpacity>

                <TouchableOpacity onPress={this.goToHome.bind(this)}><Text>Signin</Text></TouchableOpacity>
            </View>
        )
    }
}
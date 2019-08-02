import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class Signup extends React.Component {
    goToSignin(){
        this.props.navigation.navigate('Signin')
    }
    goToHome(){
        this.props.navigation.navigate('App')

    }
    render() {
        return (
            <View style={{ flex: 1, marginTop: 25 }}>
                <Text>Welcome To Signup Screen</Text>
                <TouchableOpacity onPress={this.goToSignin.bind(this)}><Text>Already have an account? Signin</Text></TouchableOpacity>

                <TouchableOpacity onPress={this.goToHome.bind(this)}><Text>Signup</Text></TouchableOpacity>
            </View>
        )
    }
}
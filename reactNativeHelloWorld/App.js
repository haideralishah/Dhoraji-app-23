import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import Routes from './Routes'
import ChildElement from './Child'
//adb shell input keyevent 82

export default class App extends React.Component {
  state = {
    course: ['html', 'css', 'js', 'react', 'react native', 'html', 'css', 'js', 'react', 'react native', 'html', 'css', 'js', 'react', 'react native', 'html', 'css', 'js', 'react', 'react native']
  }

  render() {
    return (
      <Routes />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20,
    color: 'red',
  }
});

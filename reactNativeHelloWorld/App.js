import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { Provider } from 'react-redux'
import Routes from './Routes'
import ChildElement from './Child';
import store from './redux/index';
//adb shell input keyevent 82

export default class App extends React.Component {
  state = {
    course: ['html', 'css', 'js', 'react', 'react native', 'html', 'css', 'js', 'react', 'react native', 'html', 'css', 'js', 'react', 'react native', 'html', 'css', 'js', 'react', 'react native']
  }

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
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

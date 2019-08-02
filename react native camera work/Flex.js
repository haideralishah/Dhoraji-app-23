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
      <View style={{ flex: 1, flexDirection:'row', justifyContent:'space-around',flexWrap:'wrap' }}>
        <View style={{ height: 50, backgroundColor: 'green' }}>
          <Text style={styles.textStyle}>First Child</Text>
        </View>
        <View style={{height: 50, backgroundColor: 'blue' }}>
          <Text style={styles.textStyle}>Second Child</Text>
        </View>
        <View style={{  height: 50, backgroundColor: 'yellow' }}>
          <Text style={styles.textStyle}>Third Child</Text>
        </View>
        <View style={{ height: 50, backgroundColor: 'grey' }}>
          <Text style={styles.textStyle}>Fourth Child</Text>
        </View>
        <View style={{ height: 50, backgroundColor: 'black' }}>
          <Text style={styles.textStyle}>Fifth Child</Text>
        </View>
      </View>
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

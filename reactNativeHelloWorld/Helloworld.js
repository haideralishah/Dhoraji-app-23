import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import ChildElement from './Child'
//adb shell input keyevent 82

export default class App extends React.Component {
  state = {
    course: ['html', 'css', 'js', 'react', 'react native', 'html', 'css', 'js', 'react', 'react native', 'html', 'css', 'js', 'react', 'react native', 'html', 'css', 'js', 'react', 'react native']
  }

  render() {
    return (
      <ScrollView>
        {/* <View style={styles.container}>
          <FlatList
            data={this.state.course}
            renderItem={({ item }) => <Text style={styles.textStyle}>{item}</Text>}
          /> */}



        {/* <Text style={{fontSize: 50, color: 'red'}}>This is hello world</Text> */}


        {/* {
            this.state.course.map((courseName, index) => {
              return (
                <ChildElement key={index} textContent={courseName} />
              )



            })
          } */}



        {/* </View> */}
       
      </ScrollView>
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
    fontSize: 50,
    color: 'red',
  }
});

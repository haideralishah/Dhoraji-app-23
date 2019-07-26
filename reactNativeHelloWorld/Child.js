import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';

export default class ChildElement extends React.Component {
  constructor(props) {
    super(props);
    // this.blinkText()
  }
  state = {
    showText: true
  }
  blinkText() {
    setInterval(() => {
      this.setState({
        showText: !this.state.showText
      })
    }, 1000)
  }

  showOrHideText() {
    this.setState({
      showText: !this.state.showText
    })
  }
  render() {
    return (
      <View style={styles.container}>
        {
          (this.state.showText) ? (
            <View>
              <Text style={styles.textStyle}>{this.state.text} {this.props.textContent}</Text>
              <TextInput
                style={{ height: 40 }}
                placeholder="Type here to translate!"
                onChangeText={(text) => this.setState({ text: text })}
                value={this.state.text} />
            </View>
          ) :
            <View>
              <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' }} style={{ width: 50, height: 50 }} />
              <Image source={require('./assets/rnicon.png')} style={{ width: 50, height: 50 }} />

            </View>
        }

        <View>
          {
            (this.state.showText) ? (
              <TouchableOpacity onPress={this.showOrHideText.bind(this)}><Text>Show Images</Text></TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={this.showOrHideText.bind(this)}><Text>Show Text</Text></TouchableOpacity>
              )
          }
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
    fontSize: 50,
    color: 'red',
  }
});

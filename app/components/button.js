import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native';

class Button extends Component {
  render() {
    return (
      <View style={styles.button}>
        <TouchableHighlight onPress={this.props.onclick} underlayColor="transparent">
          <Text style={styles.text}>{this.props.text}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#348ADB',
    borderRadius: 5,
    padding: 6,
    margin: 4,
    width: 100,
  },
  text: {
    color: 'white',
  },
});

export default Button;

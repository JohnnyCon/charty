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
          <Text>{this.props.text}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#348ADB',
    padding: 6,
    margin: 4,
    width: 100,
  }
});

export default Button;

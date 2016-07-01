import React, { Component } from 'react';

import {
  Slider,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Svg from 'react-native-svg';

import Bar    from './components/bar';
import Button from './components/button';
import Data   from './data';


class App extends Component {

  constructor(props){
    super(props)

    let data = new Data();
    this.state = {
      data: data,
      progress: 5,
      week: data.week,
    }
  }

  addDay() {
    let data = this.state.data;
    const newWeek = data.addDay({ progress: this.state.progress })

    this.setState({ week: newWeek })
  }

  addRandomDay() {
    let data = this.state.data;
    const newWeek = data.addDay({ progress: Math.random() * 100})

    this.setState({ week: newWeek })
  }

  resetStats() {
    let data = this.state.data;
    let emptyWeek = data.resetWeek()

    this.setState({ week: emptyWeek })
  }

  render() {
    const bricks = this.state.week.map( (day) => {
      return (
        <Bar day={day} key={day.key} />
      )
    })

    return (
      <View style={styles.container}>
        <View style={styles.controlPanel}>
          <View style={styles.sliderContainer}>
            <Slider maximumValue={100} minimumValue={0} onValueChange={(value) => this.setState({progress: value})} value={this.state.progress} style={{width: 175, margin: 10}} />
            <Text style={styles.text}>{this.state.progress.toFixed(0)} for Monday</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button text="Add Day" onclick={ () => this.addDay() } />
            <Button text="Random"  onclick={ () => this.addRandomDay() } />
          </View>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.buttonControls}>
          <Button text="Reset"  onclick={ () => this.resetStats() } />
        </View>
        <Svg width="400" height="300">
          { bricks }
        </Svg>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems    : 'center',
    flex          : 1,
    justifyContent: 'flex-start',
  },
  buttonControls: {
    backgroundColor: '#e4e4e4',
    flexDirection  : 'row',
    justifyContent : 'space-between',
    padding        : 10,
    paddingRight   : 15,
    paddingLeft    : 15,
  },
  container: {
    flex     : 1,
    marginTop: 60,
  },
  controlPanel: {
    backgroundColor: '#e4e4e4',
    flexDirection  : 'row',
    padding        : 10,
  },
  separator: {
    borderBottomColor: '#b6b6b6',
    borderBottomWidth: 1,
    paddingRight     : 20,
    paddingLeft      : 20,
  },
  sliderContainer: {
    alignItems : 'center',
    flex       : 2,
  },
  text: {
    color: '#160b2d',
  },
});

export default App;

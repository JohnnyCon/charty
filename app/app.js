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

    data = new Data();
    console.log('data.week', data.week);
    this.state = {
      data: data,
      week: data.week,
    }
  }

  addStats() {
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
          <Slider style={{width: 100, margin: 10}} />
          <Button text="Add Day"   onclick={ () => this.addStats() } />
          <Button text="Reset Week" onclick={ () => this.resetStats() } />
        </View>

        <Svg width="400" height="300">
          { bricks }
        </Svg>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
  controlPanel: {
    height: 100,
    backgroundColor: '#e4e4e4'
  }
});

export default App;

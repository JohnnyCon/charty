import React, { Component } from 'react';
import {
  View
} from 'react-native';

import {Motion, spring, presets} from 'react-motion';

import Svg,{
    G,
    Text,
    Rect,
} from 'react-native-svg';

class Bar extends Component {
  render() {
    const padding = 25
    const margin  = 25
    const offset = (this.props.day.index * padding) + margin;


    return (

      <Motion defaultStyle={{x: 0}} style={{x: spring(this.props.day.progress, presets.wobbly) }}>
        {value => (
          <G>
            <G origin={`${offset}, 70`} rotate={360}>
              <Rect
                  x="0"
                  y="0"
                  width="30"
                  height={value.x}
                  fill={this.props.day.color}
              />
              <Text originX={10} rotate={360}>{this.props.day.label}</Text>
            </G>
          </G>
        )}
      </Motion>
    )
  }
}


export default Bar;

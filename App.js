import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Selic from './src/components/Selic';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.strip1}/>
        <View style={styles.strip2}/>
        <Selic />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002776',
    alignItems: 'center',
    justifyContent: 'center',
  },
  strip1: {
    position: 'absolute',
    height: 300,
    width: 600,
    top: -100,
    left: -200,
    backgroundColor: '#009b3a',
    transform: [{
      rotateZ: '140deg'
    }]
  },
  strip2:{
    position: 'absolute',
    height: 300,
    width: 600,
    bottom: -100,
    right: -200,
    backgroundColor: '#fedf00',
    transform: [{
      rotateZ: '140deg'
    }]
  }
});

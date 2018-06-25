import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { getLastItem } from './Api';

export default class App extends Component {
  state = {
    selic: {},
  }

  componentDidMount() {
    getLastItem().then(selic => {
      this.setState({
        selic,
      })
    });
   
    //#fedf00
    //#009b3a
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.strip1}/>
        <View style={styles.strip2}/>
        <Text style={styles.title}>Selic</Text>
        <Text style={styles.value}>{ this.state.selic.valor }</Text>
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
  title: {
    color: '#fff',
    fontSize: 30,
    marginBottom: 20
  },
  value: {
    color: '#fff',
    fontSize: 70
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

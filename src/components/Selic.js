import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { getLastItem } from './../api/Api';

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
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Selic</Text>
        <Text style={styles.value}>{ this.state.selic.valor }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  }
});

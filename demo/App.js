import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DualView } from 'react-native-dual-background';

export default class App extends React.Component {
  render() {
    return (
      <DualView style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </DualView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

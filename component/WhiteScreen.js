import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const WhiteScreen = () => {
  return (
    <View style={styles.container}>
      <Text 
        style={styles.welcome}
        onPress={() => { Actions.black(); }}>
        White Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#000000',
  },
});

export default WhiteScreen;
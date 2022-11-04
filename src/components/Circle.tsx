import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Circle = () => {
  return <View style={styles.circle} />;
};

const styles = StyleSheet.create({
  circle: {
    flex: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderWidth: 10,
    borderColor: 'black',
  },
});

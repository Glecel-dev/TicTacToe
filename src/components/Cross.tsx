import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Cross = () => {
  return (
    <View style={styles.cross}>
      <View style={styles.crossLine} />
      <View style={[styles.crossLine, styles.crossLineReversed]} />
    </View>
  );
};

const styles = StyleSheet.create({
  cross: {
    height: 100,
    width: 100,
  },
  crossLine: {
    position: 'absolute',
    left: '45%',
    width: 10,
    height: '100%',
    backgroundColor: 'black',
    borderRadius: 5,
    transform: [
      {
        rotate: '45deg',
      },
    ],
  },
  crossLineReversed: {
    transform: [
      {
        rotate: '-45deg',
      },
    ],
  },
});

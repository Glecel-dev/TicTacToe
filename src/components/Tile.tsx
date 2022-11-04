import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Circle } from './Circle';
import { Cross } from './Cross';

export const Tile = (props: { cell: string; onPress: (...props: any) => any }) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.tile}>
      {props.cell === 'o' && <Circle />}
      {props.cell === 'x' && <Cross />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tile: {
    borderColor: 'black',
    borderWidth: 4,
    height: 100,
    width: 100,
  },
});

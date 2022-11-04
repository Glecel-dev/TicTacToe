import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { PlayGround } from './src/modules/Playground';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <PlayGround />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default App;

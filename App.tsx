import React from 'react';
import {SafeAreaView, StyleSheet, Platform, NativeModules} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import data from './src/db/data.json';
import JsonReader from './src/utils/JsonReader';
import ItemsList from './src/components/ItemsList';

function App(): JSX.Element {
  const inmuebles = JsonReader.jsonInmueblesToArray(data);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ItemsList data={inmuebles} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop:
      Platform.OS === 'android' ? NativeModules.StatusBarManager.HEIGHT : 0,
  },
});

export default App;

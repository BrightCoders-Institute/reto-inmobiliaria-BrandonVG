import React from 'react';
import {SafeAreaView, StyleSheet, Platform, NativeModules} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import ItemCard from './src/components/ItemCard';
import data from './src/db/data.json';
import JsonReader from './src/utils/JsonReader';

function App(): JSX.Element {
  const inmuebles = JsonReader.jsonInmueblesToArray(data);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ItemCard inmueble={inmuebles[0]} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop:
      Platform.OS === 'android' ? NativeModules.StatusBarManager.HEIGHT : 0,
    alignItems: 'center',
  },
});

export default App;

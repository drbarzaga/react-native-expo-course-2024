import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, ScrollView, SafeAreaView } from 'react-native';

import icon from './assets/icon.png';
import { useEffect, useState } from 'react';
import { getProducts } from './lib/products';
import { formatCurrency } from './lib/utils';
import Constants from 'expo-constants';
import { Main } from './components/Main';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Main />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

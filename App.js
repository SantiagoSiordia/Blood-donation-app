import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { blood } from './colors';

export default function App() {

  const image = require('./assets/landing.jpg');

  return (
    <ImageBackground source={image} style={styles.container} resizeMode='cover'>
      <Text style={styles.welcome}>¡Bienvenido!</Text>
      <Text style={styles.description}>Creé está app para que puedas ser o encontrar donador de sangre más facilmente</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcome: {
    fontSize: 40,
    color: 'white'
  },
  description: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20
  }
});

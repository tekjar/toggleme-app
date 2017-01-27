/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import Header from './src/components/Header';
import HeaderExt from './src/components/HeaderExt';
import Card from './src/components/Card';

const toggleme = () => {
  return (
    <View style={styles.container}>
      <Header text={'TOGGLE ME'}/>
      <ScrollView showsVerticalScrollIndicator={false} >
        <HeaderExt />
        <Card text='BEDROOM'/>
        <Card text='HALL'/>
        <Card text='KITCHEN'/>
        <Card text='BATHROOM'/>
        <Card text='BALCONY'/>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e9e9',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('toggleme', () => toggleme);

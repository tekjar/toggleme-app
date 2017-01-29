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
import Icon from 'react-native-vector-icons/FontAwesome';
import Device from './src/components/Device';

const bedroom = ['light', 'light', 'fan', 'socket', 'socket', 'ac'].map( device => <Device type={device} />)
const kitchen = ['light', 'light', 'socket', 'socket'].map( device => <Device type={device} />)
const bathroom = ['light', 'light', 'socket'].map( device => <Device type={device} />)
const hall = ['light', 'light', 'fan', 'fan', 'socket', 'socket', 'ac'].map( device => <Device type={device} />)
const balcony = ['light', 'light', 'light', 'socket', 'socket', 'socket'].map( device => <Device type={device} />)


const toggleme = () => {
  return (
    <View style={styles.container}>
      <Header text={'TOGGLE ME'}/>
      <ScrollView showsVerticalScrollIndicator={false} >
        <HeaderExt />
        <Card text='HALL'>
          {hall}
        </Card>
        <Card text='BEDROOM'>
          {bedroom}
        </Card>
        <Card text='KITCHEN'>
          {kitchen}
        </Card>
        <Card text='BATHROOM'>
          {bathroom}
        </Card>
        <Card text='BALCONY'>
          {balcony}
        </Card>
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

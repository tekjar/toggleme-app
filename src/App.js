import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/';
import Header from './components/Header';
import HeaderExt from './components/HeaderExt';
import Room from './components/Room';
import Device from './components/Device';
import Footer from './components/Footer';

import house from './config/house.json';

const bedroom = ['light', 'light', 'fan', 'socket', 'socket', 'ac'].map(device => <Device type={device} />);
const kitchen = ['light', 'light', 'socket', 'socket'].map(device => <Device type={device} />);
const bathroom = ['light', 'light', 'socket'].map(device => <Device type={device} />);
const hall = ['light', 'light', 'fan', 'fan', 'socket', 'socket', 'ac'].map(device => <Device type={device} />);
const balcony = ['light', 'light', 'light', 'socket', 'socket', 'socket'].map(device => <Device type={device} />);

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View style={styles.container}>
                <Header text={'TOGGLE ME'} />
                <ScrollView showsVerticalScrollIndicator={false} >
                    <HeaderExt />
                    <Room text='HALL'>
                        {hall}
                    </Room>
                    <Room text='BEDROOM'>
                        {bedroom}
                    </Room>
                    <Room text='KITCHEN'>
                        {kitchen}
                    </Room>
                    <Room text='BATHROOM'>
                        {bathroom}
                    </Room>
                    <Room text='BALCONY'>
                        {balcony}
                    </Room>
                </ScrollView>
                <Footer />
            </View>
        </Provider>
    );
};

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

export default App;

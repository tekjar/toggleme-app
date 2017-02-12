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

const houseBluePrint = (room) => {
    console.log(room.devices);
    const devices = room.devices.map(device => <Device key={device.id} type={device.type} />);
    return <Room key={room.id} name={room.name} >{devices}</Room>;
};

const rooms = house.map(houseBluePrint);

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View style={styles.container}>
                <Header text={'TOGGLE ME'} />
                <ScrollView showsVerticalScrollIndicator={false} >
                    <HeaderExt />
                    {rooms}
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

import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/';
import Header from './components/Header';
import HeaderExt from './components/HeaderExt';
import Footer from './components/Footer';
import Home from './components/Home';


const App = () => {
    return (
        // Create a store with all the available reducers
        <Provider store={createStore(reducers)}>
            <View style={styles.container}>
                <Header text={'TOGGLE ME'} />
                <ScrollView showsVerticalScrollIndicator={false} >
                    <HeaderExt />
                    <Home />
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

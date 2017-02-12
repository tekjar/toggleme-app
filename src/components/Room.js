import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Room = (props) => {
    return (
        <View>
            <View style={styles.heading}>
                <Text style={styles.text}>{props.name}</Text>
            </View>
            <View style={styles.container} >
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.scroll}
                >
                    {props.children}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = {
    container: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10,
        height: 100,
        backgroundColor: '#f6f6f6',
    },
    scroll: {
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    heading: {
        height: 50,
        backgroundColor: '#e9e9e9',
    },
    text: {
        justifyContent: 'flex-end',
        color: '#000000',
        fontSize: 13,
        fontWeight: '300',
        marginLeft: 20,
        marginRight: 5,
        marginTop: 20,
    },
};

export default Room;

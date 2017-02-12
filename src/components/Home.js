import React, { Component } from 'react';
import { View } from 'react-native';

import { connect } from 'react-redux';
import Room from './Room';
import Device from './Device';

const houseBluePrint = (room) => {
    console.log(room.devices);
    const devices = room.devices.map(device => <Device key={device.id} type={device.type} />);
    return <Room key={room.id} name={room.name} >{devices}</Room>;
};

class Home extends Component {
    //rooms = this.props.house.map(houseBluePrint);

    render() {
        const { rooms } = this.props;
        return <View>{rooms.map(houseBluePrint)}</View>;
    }
}

const mapStateToProps = (state) => {
    const { home } = state;
    return { rooms: home.rooms };
};

// NOTE: 'connect' passes 'redux store' to mapStateToProps as 'state'
// creating a new function with 'Home' as arg  and passing 
// 'object' returned by 'mapStateToProps' as 'prop' to 'Home'
export default connect(mapStateToProps)(Home);

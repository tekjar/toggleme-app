import React, { Component } from 'react';
import { View } from 'react-native';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Foundation';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';

class Device extends Component {
    state = { status: 'off' }

    count = 0;
    color = '#7f7f7f';

    toggleColor = () => {
        this.count++;
        console.log('count --> ', this.count);
        if (this.state.status === 'on') {
            this.color = '#7f7f7f';
            this.setState({ status: 'off' });
        } else {
            this.color = '#006600';
            this.setState({ status: 'on' });
        }
    }

    renderDevice(device) {
        // console.log(device);

        switch (device) {
            case 'light':
                return <Icon2 name="lightbulb" size={30} onPress={this.toggleColor} color={this.color} />;
            case 'fan':
                return <Icon3 name="fan" size={30} onPress={this.toggleColor} color={this.color} />;
            case 'ac':
                return <Icon3 name="cow" size={30} onPress={this.toggleColor} color={this.color} />;
            case 'socket':
                return <Icon3 name="power-socket" onPress={this.toggleColor} size={30} color={this.color} />;
            default:
                return <Icon1 name="question" size={30} onPress={this.toggleColor} color={this.color} />;
        }
    }

    render() {
        const { id, type } = this.props;

        return (
            <View style={styles.container}>
                {this.renderDevice(type)}
            </View>
        );
    }
}

const styles = {
    container: {
        paddingRight: 10,
        paddingLeft: 20,
    },
};

export default Device;
import React, { Component } from 'react';
import { View } from 'react-native';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Foundation';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';

class Device extends Component {
    count = 0
    color = '#7f7f7f'
    state = { status: 'off' }

    onPress = () => {
        this.count++;
        console.log('count --> ', this.count);
        if (this.state.status === 'on') {
            this.color = '#7f7f7f'
            this.setState({status: 'off'})
        } else {
            this.color = '#006600'
            this.setState({status: 'on'})
        }
    }

    render() {
        if (this.props.type === 'light') {
            return (
                <View style={styles.container}>
                    <Icon2 name="lightbulb" size={30} onPress={this.onPress} color={this.color}/>
                </View>
            )
        } else if (this.props.type === 'fan') {
            return (
                <View style={styles.container}>
                    <Icon3 name="fan" size={30} onPress={this.onPress} color={this.color} />
                </View>
            )
        } else if (this.props.type === 'ac') {
            return (
                <View style={styles.container}>
                    <Icon3 name="cow" size={30} onPress={this.onPress} color={this.color} />
                </View>
            )
        } else if (this.props.type === 'socket') {
            return (
                <View style={styles.container}>
                    <Icon3 name="power-socket" size={30} onPress={this.onPress} color={this.color} />
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <Icon1 name="question" size={30} onPress={this.onPress} color={this.color} />
                </View>
            )
        }
    }
}

const styles = {
  container: {
    paddingRight: 10,
    paddingLeft: 20,
  },
};

export default Device;
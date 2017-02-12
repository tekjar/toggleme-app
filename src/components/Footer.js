import React from 'react';
import { Text, View } from 'react-native';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Foundation';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon4 from 'react-native-vector-icons/Entypo';
import Icon5 from 'react-native-vector-icons/MaterialIcons'

const Footer = () => {
  return (
    <View style={styles.container}>
      <Icon2 name="home" size={25} color='#CD5C5C'>
      </Icon2>
      <Icon5 name="notifications" size={25} >
      </Icon5>
      <Icon3 name="auto-fix" size={25} >
      </Icon3>
      <Icon4 name="line-graph" size={25} >
      </Icon4>
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: '#f6f6f6',
    borderColor: '#e9e9e9',
    borderTopWidth: 1,
    borderBottomWidth: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
}

export default Footer;

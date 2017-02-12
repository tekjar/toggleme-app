// Import library to help create a component
import React from 'react';
import { Text, View } from 'react-native';
import { SocialIcon, Icon } from 'react-native-elements';

// Make a component
const Header = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Icon
          reverse
          name='sc-telegram'
          type='evilicon'
          size={15}
          color='#517fa4'
        />
      </View>
      <View style={styles.center}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: '#CD5C5C',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 70,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // elevation: 2,
    //position: 'relative'
  },
  left: {
    paddingRight: 10,
    paddingLeft: 20,
  },
  center: {
    paddingRight: 10,
  },
  right: {
    paddingRight: 20,
    paddingLeft: 20,
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
  }
};

// Make the component availabe to other parts of the app
export default Header;

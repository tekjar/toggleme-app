// Import library to help create a component
import React from 'react';
import { Text, View } from 'react-native';
import { SocialIcon } from 'react-native-elements';

// Make a component
const Header = ({text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <SocialIcon type='twitter' />
      </View>
      <View style={styles.center}>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.right} />
    </View>
  );
};

const HeaderExtend = () => {
  return (
    <View style={styles.extend}>
      <Text>a</Text>
      <Text>a</Text>
      <Text>a</Text>
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: '#CD5C5C',
    flexDirection: 'row',
    height: 70,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    //position: 'relative'
  },
  extend: {
    backgroundColor: '#CD5C5C',
    flexDirection: 'row',
    height: 70,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    //position: 'relative'
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  center: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 20
  }
};

// Make the component availabe to other parts of the app
export default Header;

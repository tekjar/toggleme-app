import React from 'react';
import { Text, View } from 'react-native';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Foundation';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';

const HeaderExt = () => {
  return (
    <View style={styles.container}>
      <Icon3 name="lan-connect" size={40} color='#28bfca'>
        <Text style={{fontSize: 9}}>CONNECTION</Text>
      </Icon3>
      <Icon1 name="rupee" size={40} color='#7fbf7f'>
        <Text style={{fontSize: 9}}>REPORTS</Text>
      </Icon1>
      <Icon3 name="history" size={40} color='#ffb732'>
        <Text style={{fontSize: 9}}>HISTORY</Text>
      </Icon3>
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: '#CD5C5C',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    marginBottom: 10,
    position: 'relative'
  },
}

export default HeaderExt;
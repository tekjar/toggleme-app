import React from 'react';
import { Text, View } from 'react-native';

const HeaderExt = () => {
  return (
    <View style={styles.container}>
      <Text>a</Text>
      <Text>b</Text>
      <Text>c</Text>
      <Text>d</Text>
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
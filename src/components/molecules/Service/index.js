import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Service = ({label, img}) => {
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image source={img} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 6,
  },
  container: {
    width: '25%',
    alignItems: 'center',
  },
  img: {
    width: 58,
    height: 58,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Service;
